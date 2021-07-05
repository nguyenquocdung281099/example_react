import * as type from "./const_action";

export const getData = (filter) => {
  return {
    type: type.GET_DATA,
    filter,
  };
};
export const getDatsc = (product) => {
  return {
    type: type.GET_DATA_SC,
    payload: product,
  };
};
export const changeFilter = (filter) => {
  return {
    type: type.CHANGE_FILTER,
    payload: filter,
  };
};

export const getFilter = (param) => {
  return {
    type: type.GET_FILTER,
    payload: param,
  };
};
export const getFilterSC = (filter) => {
  return {
    type: type.GET_FILTER_SC,
    payload: filter,
  };
};

export const getFilterType = (filter) => {
  return {
    type: type.GET_FILTER_TYPE,
    payload: filter,
  };
};
export const getFilterTypeSC = (filter) => {
  return {
    type: type.GET_FILTER_TYPE_SC,
    payload: filter,
  };
};

export const getFilterBrand = (filter) => {
  return {
    type: type.GET_FILTER_BRAND,
    payload: filter,
  };
};
export const getFilterBrandSC = (filter) => {
  return {
    type: type.GET_FILTER_BRAND_SC,
    payload: filter,
  };
};

export const getFilterRating = (filter) => {
  return {
    type: type.GET_FILTER_RAITING,
    payload: filter,
  };
};
export const getFilterRatingSC = (filter) => {
  return {
    type: type.GET_FILTER_RAITING_SC,
    payload: filter,
  };
};

export const setLoading = (string) => {
  return {
    type: type.LOADING,
    payload: string,
  };
};
