import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md"
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-pink-400 to-yellow-200 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl text-pink-700 font-bold">I am a Programmer</h2>
          <p className="text-white py-4 max-w-md
          ">Hello! My name is Shraddha Bajpai, and I am a passionate programmer with a keen interest in software development, web development, and competitive coding.In addition to software and web development, I am actively involved in competitive coding. Participating in coding competitions challenges me to think critically and find efficient solutions under time constraints. </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-200 to-blue-400 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight  size={23}/>
              </span>
            </Link>
          </div>

        </div>

        <div>
          <img src={HeroImage} alt="hello" className="h-auto max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Home
