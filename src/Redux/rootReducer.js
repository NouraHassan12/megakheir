import { combineReducers } from "redux";
import cardReducer from "./CardList/CardReducer";
import cardDetailsReducer from "./CardDetails/CardDetailsReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  Details: cardDetailsReducer,
});

export default rootReducer;
