import React from "react";
import "./Home.css";
import { FaCat } from "react-icons/fa";

export const Herocontent = () => {
  return (
    <div className="herocontent_div">
      <div className="main_div">
        <div className="title_div">
          <h1 className="title">
            Your Pet{" "}
            <span className="icon">
              <FaCat />
            </span>{" "}
            Our Services
          </h1>
          <p>
            Before you home pet, be sure your're ready to take care of it
            properly
          </p>
          <div>
            <button className="ourservice_btn">Our Services</button>
            <a href="">Create Schedule</a>
          </div>
          <div className="flex_div">
            <div>
              <img
                src="https://i.postimg.cc/N06zh2ch/Screenshot-2023-02-01-133316.png"
                alt=""
              />
            </div>
            <div className="flex_div_desc">
              <h1>12K+</h1>
              <div className="line"></div>
              <p>See user rating of us to see the quality we provide.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_img_div">
        <img
          src="https://i.postimg.cc/Dz665ND9/Screenshot-2023-02-01-134331.png"
          alt=""
          width="100%"
        />
      </div>
    </div>
  );
};
