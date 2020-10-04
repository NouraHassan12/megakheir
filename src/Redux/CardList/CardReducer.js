import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
} from "./CardTypes";

const initialState = {
  loading: false,
  cards: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
        
      };
    case FETCH_CARDS_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
        error: "",
      };

    case FETCH_CARDS_FAILURE:
      return {
        loading: false,
        cards: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
