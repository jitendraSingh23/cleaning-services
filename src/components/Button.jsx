import { useEffect, useMemo } from "react";
import buttonsvg from "../assets/img/buttonsvg.svg";
import buttonsvgblue from "../assets/img/buttonsvgblue.svg";

export function Button({ title, onClick, btntype }) {
  //options for buttons=> bluesvg , bluenonsvg , outlined ,yellow

  const needSvg = btntype;
  if (needSvg == "bluenonsvg") {
    return (
      <button
        onClick={onClick}
        className="
     px-8 h-full text-center items-center text-xl bg-buttoncolor rounded-xl text-txcolor flex hover:scale-95 hover:bg-bluedark duration-300
     "
      >
        {title}{" "}
      </button>
    );
  }
  if (needSvg == "bluesvg") {
    return (
      <button
        onClick={onClick}
        className="
     px-8 h-full text-center items-center text-xl bg-buttoncolor rounded-xl text-txcolor flex hover:scale-95 hover:bg-bluedark duration-300 
     "
      >
        {title}{" "}
        <img
          src={buttonsvg}
          alt=""
          className="pl-3 justify-center items-center pt-1"
        />{" "}
      </button>
    );
  }
  if (needSvg == "outlined") {
    return (
      <button
        className="
        px-8 h-full text-center items-center text-xl rounded-xl text-buttoncolor border-2 border-buttoncolor  flex "
      >
        {title}{" "}
        <img
          src={buttonsvgblue}
          alt=""
          className="pl-3 justify-center items-center pt-1"
        />{" "}
      </button>
    );
  }
  if (needSvg == "yellow") {
    return (
      <button className="px-8 h-full text-center items-center bg-yellow rounded-lg font-medium text-lg hover:bg-opacity-85 hover:scale-95 duration-300">
        {title}
      </button>
    );
  }
  return <div>Err= use correct button option</div>;
}
