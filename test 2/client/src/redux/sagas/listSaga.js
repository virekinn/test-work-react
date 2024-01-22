import {
  call, put, delay, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_LIST } from '../types';
import { setList } from '../actions/listActions';
import setErrorList from '../actions/errorListAction';

const getList = () => axios.get('http://localhost:7070/api/services');

function* listWorker() {
  try {
    yield put(setErrorList(false));
    yield delay(500); // использовал чтобы была видна анимация спиннера
    const res = yield call(getList);
    yield put(setList(res.data));
  } catch (e) {
    yield put(setErrorList(true));
    console.error(e);
  }
}

function* listWatcher() {
  yield takeLatest(FETCH_LIST, listWorker);
}

export default listWatcher;
