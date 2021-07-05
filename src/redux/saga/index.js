import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import queryString from "query-string";

import * as func_action from "../action";
import { URL_PRODUCT } from "../../const";
import * as action from "../action/const_action";

export default function* saga() {
  yield takeLatest(action.GET_DATA, getProduct);
  yield takeLatest(action.GET_FILTER, getFilters);
  yield takeLatest(action.GET_FILTER_TYPE, getFilterType);
  yield takeLatest(action.GET_FILTER_BRAND, getFilterBrand);
  yield takeLatest(action.GET_FILTER_RAITING, getFilterRating);
}

function* getProduct(action) {
  const filter = queryString.stringify(action.filter);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const product = yield call(get, url);
    yield put(func_action.setloading("none"));
    if (product.status === 200) {
      yield put(func_action.getdatsc(product.data));
    }
  } catch (e) {}
}

function* getFilters(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);

    yield put(func_action.getfilterSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterType(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getfiltertypeSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterBrand(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getfilterbrandSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterRating(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getfilterratingSC(datas.data));
  } catch (e) {
    // show toast
  }
}
// ! function call api

function get(url) {
  return axios.get(url);
}
