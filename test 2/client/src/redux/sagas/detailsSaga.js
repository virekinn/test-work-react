import {
  call, put, delay, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DETAILS } from '../types';
import setErrorDetails from '../actions/errorDetailsAction';
import { setDetails } from '../actions/detailsActions';

const getDetails = (id) => axios.get(`http://localhost:7070/api/services/${id}`);

function* detailsWorker(action) {
  try {
    yield put(setErrorDetails(false));
    yield delay(500); // использовал чтобы была видна анимация спиннера
    const res = yield call(getDetails, action.payload.id);
    yield put(setDetails(res.data));
  } catch (e) {
    yield put(setErrorDetails(true));
    console.error(e);
  }
}

function* detailsWatcher() {
  yield takeLatest(FETCH_DETAILS, detailsWorker);
}

export default detailsWatcher;
