import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../Redux/CardList/CardActions";
import { Link } from "react-router-dom";
import "../../src/Styling.sass";
function CardsContainer(props) {
const { cardssData, fetchCards } = props;

  useEffect(() => {
    fetchCards();
  }, []);

  return cardssData.loading ? (
    <h2>Loading</h2>
  ) : cardssData.error ? (
    <h2>{cardssData.error}</h2>
  ) : (
    <div className="cardContainer">
    <div className="container">
      <h3  className="title" style={{color:"white"}} >
        الجمعيات الخيرية
      </h3>
      <div className="row">
        {cardssData &&
          cardssData.cards &&
          cardssData.cards.map((card) => (
            <div className=" content col-md-4" key={card.pkID}>
              <div className="card">
                <div className="card-body">
                  <img
                    src={card.Logo}
                    className=" img card-img-top"
                    alt="..."
                    style={{ height: "35vh" }}
                  />

                  <div className="card-title">
                    <h5>{card.Name}</h5>
                  </div>
                  <div className="card-content">
                    <button className="card-btn">
                      <Link to={`/card/${card.pkID}`}>...المزيد</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cardssData: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: () => dispatch(fetchCards()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
