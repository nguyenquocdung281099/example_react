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
  datatype: [],
  databrand: [],
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
      return state;

    case actiontype.CHANGE_FILTER:
      newState.filter = { ...action.payload };
      console.log(newState.filter);
      state = { ...newState };
      return state;

    case actiontype.GET_FILTER_SC:
      console.log("hello render");
      newState = {
        ...newState,
        dataGetFilter: action.payload,
      };
      return { ...newState };

    case actiontype.GET_FILTER_TYPE_SC:
      newState = { ...newState, datatype: action.payload };
      return { ...newState };
    case actiontype.GET_FILTER_BRAND_SC:
      newState = { ...newState, databrand: action.payload };
      return { ...newState };
    case actiontype.GET_FILTER_RAITING_SC:
      newState = { ...newState, dataRating: action.payload };
      return { ...newState };
    case actiontype.LOADING:
      newState = { ...newState, loading: action.payload };
      // console.log(action.payload);
      return { ...newState };
    default:
      return state;
  }
}
