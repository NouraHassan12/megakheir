import React from "react";
import "./Styling.sass";
import { Link } from "react-router-dom";
import CardsContainer from "./Components/CardsContainer";

import User from "./Images/Vector.svg";
import Logo from "./Images/MEGAKHEIR-Logo 1.svg";
import PoweredBy from "./Images/Powered-by.svg";
import facebook from "./Images/Facebook.svg";
import instagram from "./Images/instagram.svg";
function App() {
  return (
    <div className="">
      <nav>
        <Link to="/">
          <img src={User} alt="user" />
        </Link>

        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

      
      </nav>
      
      <CardsContainer />

      <footer>
        <Link to="/">
          <img src={PoweredBy} alt="PoweredBy" />
        </Link>
        <div>
          <img src={facebook} alt="facebook" style={{ marginRight: "10px" }} />
          <img src={instagram} alt="instagram" />
        </div>
      </footer>
    </div>
  );
}

export default App;
