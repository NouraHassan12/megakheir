import {
  FETCH_CARDS_DETAILS_REQUEST,
  FETCH_CARD_DETAILS_SUCCESS,
  FETCH_CARD_DETAILS_FAILURE,
} from "./CardDetailsTypes";

const initialState = {
  loading: false,
  cardData: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
       
      };

      case FETCH_CARD_DETAILS_SUCCESS:
        return {
          loading: false,
          cardData:action.payload,
          error: "",
        };

    case FETCH_CARD_DETAILS_FAILURE:
      return {
         loading: false,
         cardData: [],
        error: action.payload,
      };
   
    default:
      return state;
  }
};

export default reducer;
