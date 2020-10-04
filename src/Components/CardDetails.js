import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCard } from "../Redux/CardDetails/CardDetailsAction";
import { Link } from "react-router-dom";
function CardDetails(props) {
  const { cardDetailss, fetchCard } = props;
  const cardID = props.match.params.pkID;

  useEffect(() => {
    fetchCard(cardID);
  }, []);

  return cardDetailss.loading ? (
    <h2>Loading</h2>
  ) : cardDetailss.error ? (
    <h2>{cardDetailss.error}</h2>
  ) : (
    <div>
      {cardDetailss &&
        cardDetailss.cardData &&
        cardDetailss.cardData.map((Data) => (
          <div
            className="card mb-2"
            key={Data.Name}
            style={{ textAlign: "center" }}
          >
            <div className="card-body">
            <h5 className="card-title">{Data.Name}</h5>
              <p className="card-text">{Data.Description_AR}</p>
              <img
                src={Data.ImageUrl}
                alt="img"
                style={{ width: "50%", height: "50%" }}
              />

              <div className="card-content">
                <button className="card-btn">
                  <Link to="/">تبرع الان</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardDetailss: state.Details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: (cardID) => dispatch(fetchCard(cardID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
