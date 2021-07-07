import * as action from "../action/index";
import queryString from "query-string";
import { URL_PRODUCT } from "../../const";
import axios from "axios";

export const asynGetData = (filter) => {
  const param = queryString.stringify(filter);
  return (dispatch) => {
    dispatch(action.getData());
    return axios.get(`${URL_PRODUCT}${param}`).then(
      (user) => {
        setTimeout(() => {
          dispatch(action.setLoading("none"));
        }, 500);
        dispatch(action.getDatsc(user.data));
      },
      (err) => console.log(err)
    );
  };
};

export const asynGetType = (filter) => {
  const param = queryString.stringify(filter);
  return (dispatch) => {
    dispatch(action.getFilterType());
    return axios.get(`${URL_PRODUCT}${param}`).then(
      (type) => {
        dispatch(action.getFilterTypeSC(type.data));
      },
      (err) => console.log(err)
    );
  };
};

export const asynGetCategories = (filter) => {
  const param = queryString.stringify(filter);
  return (dispatch) => {
    dispatch(action.getFilter());
    return axios.get(`${URL_PRODUCT}${param}`).then(
      (categories) => {
        dispatch(action.getFilterSC(categories.data));
      },
      (err) => console.log(err)
    );
  };
};

export const asynGetBrand = (filter) => {
  const param = queryString.stringify(filter);
  return (dispatch) => {
    dispatch(action.getFilterBrand());
    return axios.get(`${URL_PRODUCT}${param}`).then(
      (brand) => {
        dispatch(action.getFilterBrandSC(brand.data));
      },
      (err) => console.log(err)
    );
  };
};

export const asynGetRating = (filter) => {
  const param = queryString.stringify(filter);
  return (dispatch) => {
    dispatch(action.getFilterRating());
    return axios.get(`${URL_PRODUCT}${param}`).then(
      (rating) => {
        dispatch(action.getFilterRatingSC(rating.data));
      },
      (err) => console.log(err)
    );
  };
};
