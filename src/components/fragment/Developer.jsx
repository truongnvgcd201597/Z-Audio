import React from "react";
import "../assets/scss/Developer.scss";
import AvatarImage from "../assets/img/avatar.jpg";

const Developer = () => {
  return (
    <div className={"Developer"}>
      <div className="Developer-profile">
        <div className="Developer-profileCard">
          <img src={AvatarImage} alt="Profile" />
          <div className={"Card-details"}>
            <h3>NV Truong</h3>
            <p>Frontend developer</p>
          </div>
        </div>
        <div className="Developer-profileDetails">
          <p>
            I'm a passionate front-end web developer with UI and technology
            expertise. My skills include HTML, CSS, JavaScript, ReactJS, and
            Typescript and I stay up to date with the latest advancements in
            these areas. In addition, I am proficient in using tools like
            Git/Github for efficient project management and collaboration. I
            look forward to contributing my skills as a front-end web developer.
            I look forward to joining a professional and dynamic team where I
            can develop myself and contribute to the success of the company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
