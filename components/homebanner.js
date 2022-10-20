/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {useState, useRef, useEffect} from "react";
import {FaPrayingHands} from "react-icons/fa";

const Homebanner = () => {
  return (
    <div className="banner font-poppins">
      <div className="banner_container">
        <div className="left_container">
          <div className="what_is">What is Tailwind CSS UI bootstrap</div>
          <div className="what_is_ans">
            <p>
              This is one stop for frontend developers (sorry 🙏 fullstack
              developers) who are designing and building their website with
              tailwind css
            </p>
            <p>
              Here you can find all UI components and layouts build exclusively
              in tailwind CSS
            </p>
            <p>
              Additional point, checkout components page - dont say this to your
              competitors 🤫
            </p>
          </div>
        </div>
        <div className="right_container">
          <img src="/home_banner.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
