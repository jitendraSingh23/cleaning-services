import { Reviewcard } from "../components/Reviewcard";
import React from "react";
import Slider from "react-slick";
import SimpleSlider from "../components/SimpleSlider";

export function Clientreview() {
  return (
    <div>
      <div className="flex justify-center flex-col ml-28 mt-28">
        <div className="items-start uppercase text-buttoncolor font-medium">
          —— Happy clients
        </div>
        <div className="capitalize text-4xl font-semibold my-2">
        What Our Client Say’s
        </div>
        <div
          className="text-customgrey w-1/3 
    "
        >
          While we can customize your cleaning plan to suit your needs, most
          clients schedule regular cleaning services:
        </div>
      </div>
      <div className="overflow-hidden mx-28 h-auto my-10 py-8">
        <SimpleSlider></SimpleSlider>
      </div>
    </div>
  );
}
