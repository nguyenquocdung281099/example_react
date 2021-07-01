import * as type from "./const_action";

export const getdata = (filter) => {
  return {
    type: type.GET_DATA,
    filter,
  };
};
export const getdatsc = (product) => {
  return {
    type: type.GET_DATA_SC,
    payload: product,
  };
};
export const changefilter = (filter) => {
  return {
    type: type.CHANGE_FILTER,
    payload: filter,
  };
};

export const getfilter = (param) => {
  return {
    type: type.GET_FILTER,
    payload: param,
  };
};
export const getfilterSC = (filter) => {
  return {
    type: type.GET_FILTER_SC,
    payload: filter,
  };
};

export const getfiltertype = (filter) => {
  return {
    type: type.GET_FILTER_TYPE,
    payload: filter,
  };
};
export const getfiltertypeSC = (filter) => {
  return {
    type: type.GET_FILTER_TYPE_SC,
    payload: filter,
  };
};

export const getfilterbrand = (filter) => {
  return {
    type: type.GET_FILTER_BRAND,
    payload: filter,
  };
};
export const getfilterbrandSC = (filter) => {
  return {
    type: type.GET_FILTER_BRAND_SC,
    payload: filter,
  };
};

export const getfilterrating = (filter) => {
  return {
    type: type.GET_FILTER_RAITING,
    payload: filter,
  };
};
export const getfilterratingSC = (filter) => {
  return {
    type: type.GET_FILTER_RAITING_SC,
    payload: filter,
  };
};

export const setloading = (string) => {
  return {
    type: type.LOADING,
    payload: string,
  };
};
