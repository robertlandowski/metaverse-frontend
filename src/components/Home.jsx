import React from "react";
import "../styles/Home.css";

function Home({ onButtonClick }) {
  return (
    <div className="role-selection-container">
      <header className="header">Metaverse Mall</header>
      <div className="home-content">
        <div className="prompt">Assume your role</div>
        <div className="buttons-container">
          <button
            className="glowbuttonalt"
            onClick={() => onButtonClick("red")}
          >
            {" "}
            Admin{" "}
          </button>
          <button className="glowbutton" onClick={() => onButtonClick("blue")}>
            Owner
          </button>
          <button onClick={() => onButtonClick("purple")}>Shopper</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
