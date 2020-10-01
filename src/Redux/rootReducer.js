import {combineReducers} from 'redux';
import cardReducer from './CardList/CardReducer';


const rootReducer = combineReducers({
card:cardReducer,
})

export default rootReducer;