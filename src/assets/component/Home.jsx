import React from "react";
import img from "../img/pic.jpeg";
import link from "../img/link.png";
import get from "../img/get hub.png";
import instra from "../img/instra.webp";
import facebook from "../img/facbook.png";
import twitter from "../img/twitter.png";
function Home() {
  return (
    <>
      <div className="hero min-h-screen  bg-gray-300">
        <div className="hero-content flex-col lg:flex-row-reverse gap-96">
        <img src={img} className="h-[300px] rounded-lg shadow-2xl" style={{borderRadius: '30% 70% 25% 75% / 55% 30% 70% 45% '}} />

          <div>
            <h1 className="text-5xl font-mono text-green-800  ">
              I'm <span className=" font-boldn text-rose-400 ">Sweta Raj</span>
            </h1>
            <p className="py-6 font-mono  text-dark to-black">
              Entreprenueur,fornt-end developer ,UI &UX designer <br />
              and student.
            </p>
            <div className="flex items-center  gap-6 pt-24 ">
              <img src={link} alt="" className="h-5 " />
              <img src={get} alt="" className="h-9  " />
              <img src={instra} alt="" className="h-5  " />
              <img src={facebook} alt="" className="h-5 " />
              <img src={twitter} alt="" className="h-5 " />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
