import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";
import { UserData } from "../../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { isAuth } = UserData();

  const handleGetStarted = () => {
    if (isAuth) {
      navigate("/courses");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our E-learning Platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={handleGetStarted} className="common-btn">
            Get Started
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
