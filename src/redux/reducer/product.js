import * as actiontype from "../action/const_action";

const stateInit = {
  Product: [],
  pagination: {
    _page: 1,
    _limit: 10,
    _totalRows: 0,
  },
  filter: {},
  dataGetFilter: [],
  dataType: [],
  dataBrand: [],
  dataRating: [],
  loading: "block",
};

export default function ProductReducer(state = stateInit, action) {
  let newState = { ...state };
  switch (action.type) {
    case actiontype.GET_DATA_SC:
      newState = {
        ...newState,
        Product: action.payload.data,
        pagination: action.payload.pagination,
      };
      state = { ...newState };
      return { ...state };

    case actiontype.CHANGE_FILTER:
      newState.filter = { ...action.payload };
      state = { ...newState };
      return { ...state };

    case actiontype.GET_FILTER_SC:
      newState = {
        ...newState,
        dataGetFilter: action.payload,
      };
      return { ...newState };

    case actiontype.GET_FILTER_TYPE_SC:
      newState = { ...newState, dataType: action.payload };
      return { ...newState };

    case actiontype.GET_FILTER_BRAND_SC:
      newState = { ...newState, dataBrand: action.payload };
      return { ...newState };

    case actiontype.GET_FILTER_RAITING_SC:
      newState = { ...newState, dataRating: action.payload };
      return { ...newState };

    case actiontype.LOADING:
      newState = { ...newState, loading: action.payload };
      return { ...newState };

    default:
      return state;
  }
}
