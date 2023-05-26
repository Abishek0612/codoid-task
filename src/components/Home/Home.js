import React from "react";
import "./home.css";
import fingerImage from "../../assets/finger.jpg";

function Home() {
  return (
    <div className="home"  id="home">
      <nav className="navbar">Navbar</nav>
      <div className="content">
        <div className="image-container">
          <img src={fingerImage} alt="finger" className="finger-image" />
        </div>
        <div className="text-content">
          <h1>
            Throw your first Boomerang Today, and prepare to catch the profits
          </h1>
          <p>
            Exclusive properties deals that are not are not available through
            tradional means.Unlock
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
