import React from "react";
import HeadPhone from "../assets/img/headphones.svg";
import "./css/Login.scss";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="nav-item">
          <a className="navbar-brand" href="/">
            Z-Audio
          </a>
        </div>
        <div className="main-row">
          <div className="main-row-img">
            <img className="head-phone-img" src={HeadPhone} alt="" />
          </div>
          <div className="main-row-text">
            <h1>Music for everyone</h1>
            <p>
              Discover, stream, and share a constantly expanding mix of music
              from emerging and major artists around the world.
            </p>
            <Link to={"/home"} className="btn">
              Start
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
