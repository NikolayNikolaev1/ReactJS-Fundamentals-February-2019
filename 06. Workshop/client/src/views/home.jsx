import React, { Component } from "react";
import { Link } from "react-router-dom";
import LandingMessage from "../components/landing-message";
import TopRatedBookCards from "../components/top-rated-book-cards";

class Home extends Component {
  render() {
    return (
      <main>
        <div className="welcome-wrapper">
          <LandingMessage message="Welcome to our book store, tanya !">
            <p>
              <Link to="/store">Go To Store</Link>
              <Link to="/orders">View your orders</Link>
            </p>
          </LandingMessage>
          <TopRatedBookCards />
        </div>
      </main>
    );
  }
}

export default Home;
