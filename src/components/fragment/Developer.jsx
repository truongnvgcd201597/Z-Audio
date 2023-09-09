import React from "react";
import "../assets/scss/Developer.scss";
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";

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
          <div className="Card-btn">
            <IconButton
              target={"_blank"}
              href={
                "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
              }
              title={"avatar"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://twitter.com/Vishal_kld"}
              title={"Vishal_kld"}
            >
              <Twitter />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.linkedin.com/in/vishalsingh-/"}
              title={"vishalsingh-"}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://www.instagram.com/vishalsingh023/"}
              title={"vishalsingh023"}
            >
              <Instagram />
            </IconButton>
            <IconButton
              target={"_blank"}
              href={"https://vishal.thetechnician.in/"}
              title={"Web Portfolio"}
            >
              <Portrait />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
