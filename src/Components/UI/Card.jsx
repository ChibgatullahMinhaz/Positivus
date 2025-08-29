import React from "react";
import arrowBlack from "../../assets/Icon/ArrowBlack.png";
const Card = ({ card }) => {
  const { title, bgColor, image, titl2, icon, btnText } = card;

  return (
    <div
      className={`rounded-2xl ${bgColor} p-6 border-b-4 border border-black  flex justify-between items-center`}
    >
      <div>
        <p
          className={
            title === "Pay-per-click" ||
            title == "Social Media" ||
            title == "Content"
              ? " bg-[#fff] rounded-lg p-1 font-bold"
              : " bg-[#B9FF66] rounded-lg p-1 font-bold"
          }
        >
          {title}
        </p>
        <p
          className={
            titl2 === "advertising" ||
            (title == "Social Media" && titl2 == "Marketing") ||
            titl2 == "Creation"
              ? " bg-[#fff] rounded-lg p-1 font-bold"
              : " bg-[#B9FF66] rounded-lg p-1 font-bold"
          }
        >
          {titl2}
        </p>
        <button
          className={
            title == "Social Media" || titl2 == "Tracking"
              ? "text-white my-3 mt-10 flex space-x-1.5 items-center"
              : "my-3 mt-10 flex space-x-1.5 items-center"
          }
        >
          <img
            src={bgColor == "bg-[#191A23]" ? arrowBlack : icon}
            alt="card icon"
            className={
              title == "Social Media"||
              titl2 == "Tracking"
                ? "bg-[#fff] p-1 rounded-full"
                : "bg-[#191A23] p-1 rounded-full"
            }
          />
          {btnText}
        </button>
      </div>
      <div className="max-w-[150px]">
        <img src={image} alt="card image" />
      </div>
    </div>
  );
};

export default Card;
