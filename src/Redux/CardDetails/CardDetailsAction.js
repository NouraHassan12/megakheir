import {
  FETCH_CARDS_DETAILS_REQUEST,
  FETCH_CARD_DETAILS_SUCCESS,
  FETCH_CARD_DETAILS_FAILURE,
} from "./CardDetailsTypes";

import axios from "axios";

export const fetchCardDetailsRequest = () => {
  return {
    type: FETCH_CARDS_DETAILS_REQUEST,
  };
};

export const fetchCardDetailsSuccess = (cardData) => {
  return {
    type: FETCH_CARD_DETAILS_SUCCESS,
    payload: cardData,
  };
};

const fetchCardDetailsFailure = (error) => {
  return {
    type: FETCH_CARD_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchCard = (pkID) =>  {
  return (dispatch) => {
    dispatch(fetchCardDetailsRequest);

  axios.get(`http://62.68.253.183:8000/ngos/${pkID}`)
  .then((res=>{
    console.log(res.data.data ,"details");
    const cardData = res.data.data
    dispatch(fetchCardDetailsSuccess(cardData));
  }))
    
   .catch((error) => {
    const errorMsg = error.message;
    dispatch(fetchCardDetailsFailure(errorMsg));
  })

  }
}
