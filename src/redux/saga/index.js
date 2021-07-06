import axios from "axios";
import { put, call, takeLatest, delay } from "redux-saga/effects";
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
    yield delay(1000);
    const product = yield call(get, url);
    yield put(func_action.setLoading("none"));
    if (product.status === 200) {
      yield put(func_action.getDatsc(product.data));
    }
  } catch (e) {
    //show toast
  }
}

function* getFilters(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);

    yield put(func_action.getFilterSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterType(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getFilterTypeSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterBrand(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getFilterBrandSC(datas.data));
  } catch (e) {
    // show toast
  }
}

function* getFilterRating(action) {
  const filter = queryString.stringify(action.payload);
  const url = `${URL_PRODUCT}${filter}`;
  try {
    const datas = yield call(get, url);
    yield put(func_action.getFilterRatingSC(datas.data));
  } catch (e) {
    // show toast
  }
}
// ! function call api

function get(url) {
  return axios.get(url);
}
