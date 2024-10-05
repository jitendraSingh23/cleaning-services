import { Reviewcard } from "./Reviewcard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <Reviewcard
        clientname={"Nazmi Javier"}
        profession={"Housewife"}
        description={
          "“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”"
        }
      ></Reviewcard>
      <Reviewcard
        clientname={"Nazmi Javier"}
        profession={"Housewife"}
        description={
          "“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”"
        }
      ></Reviewcard>
      <Reviewcard
        clientname={"Nazmi Javier"}
        profession={"Housewife"}
        description={
          "“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”"
        }
      ></Reviewcard>
      <Reviewcard
        clientname={"Nazmi Javier"}
        profession={"Housewife"}
        description={
          "“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”"
        }
      ></Reviewcard>

      <Reviewcard
        clientname={"Nazmi Javier"}
        profession={"Housewife"}
        description={
          "“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”"
        }
      ></Reviewcard>
    </Slider>
  );
}
