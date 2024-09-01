import React, { useEffect } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";
import sh from "../Assets/Sherzy.png";
import hv from "../Assets/hv.jpeg";
import ay from "../Assets/ayush.jpeg";
import aj from "../Assets/abhiraj.jpeg";
import ab from "../Assets/abhinav.jpeg";
import an from "../Assets/anjali.jpg";

const Team = () => {
  useEffect(() => {
    const teamAnimation = () => {
      document.querySelectorAll(".listitem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
          gsap.to(this.querySelector(".picture"), {
            opacity: 1,
            x: gsap.utils.mapRange(
              0,
              window.innerWidth,
              -200,
              200,
              dets.clientX
            ),
            ease: Power4.easeOut,
            duration: 0.5,
          });
        });

        el.addEventListener("mouseleave", function () {
          gsap.to(this.querySelector(".picture"), {
            opacity: 0,
            ease: Power4.easeOut,
            duration: 0.5,
          });
        });
      });
    };

    teamAnimation();
  }, []);

  return (
    <div
      id="team"
      data-color="white"
      className="team-section section font-[PPNeueMachina] py-20"
    >
      <h1 className="text-center font-regular text-8xl tracking-tight transition-transform transform hover:scale-105">
        The Crew
      </h1>
      <div className="list w-full mt-10 px-10">
        {[
          {
            name: "Siddharth Shaji Vethody",
            title: "Team Lead",
            imgSrc: sh,
          },
          {
            name: "Anjali Ojha",
            title: "AI and Chatbot Specialist",
            imgSrc: an,
          },
          {
            name: "Harsh Vardhan Chauhan",
            title: "Frontend Developer",
            imgSrc: hv,
          },
          { name: "Abhiraj Patwa", title: "Backend Developer", imgSrc: aj },
          { name: "Ayush Garg", title: "Messaging", imgSrc: ay },
          { name: "Abhinav Sharma", title: "Frontend Developer", imgSrc: ab },
        ].map((member) => (
          <div
            key={member.id}
            className="listitem border-b-2 border-black w-full py-[3rem] f relative"
          >
            <div className="relative z-[3] flex items-center justify-between">
              <div className="left flex gap-20">
                <h3 className="text-5xl">{member.id}</h3>
                <h1 className="text-5xl">{member.name}</h1>
              </div>
              <h3 className="text-5xl">{member.title}</h3>
            </div>
            <div className="picture opacity-0 h-[15rem] w-[15rem] rounded-full overflow-hidden bg-red-700 absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                className="w-full h-full object-cover"
                src={member.imgSrc}
                alt={member.name}
              />
            </div>
            <div className="bluelayer absolute z-[2] bottom-0 left-0 w-full h-[0%] bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
