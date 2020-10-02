import {
  FETCH_CARDS_REQUEST,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
} from "./CardTypes";

import axios from "axios";

export const fetchCardsRequest = () => {
  return {
    type: FETCH_CARDS_REQUEST,
  };
};

const fetchCardsSuccess = (cards) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cards,
  };
};

const fetchCardsFailure = (error) => {
  return {
    type: FETCH_CARDS_FAILURE,
    payload: error,
  };
};

export const fetchCards = () => {
  return (dispatch) => {
    dispatch(fetchCardsRequest);
   
    axios
      .get("http://62.68.253.183:8000/ngos/")

      .then((res) => {
        console.log(res.data.data, "cardss");
        const cards = res.data.data;
        dispatch(fetchCardsSuccess(cards));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCardsFailure(errorMsg));
      });


  };
};
