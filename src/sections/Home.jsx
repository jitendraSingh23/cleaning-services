import { Button } from "../components/Button";
import { Buttonbordered } from "../components/Buttonbordered";
import { Buttonsvg } from "../components/Buttonsvg";
import { Navbar } from "../components/navbar";

export function Home() {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      {/* //top subheading */}
      <div className=" flex text-lg text-buttoncolor font-medium items-center justify-center mt-28">
        Professional Cleaning Service
      </div>

      <div
        className=" flex text-6xl text-black font-bold items-center justify-center mt-10
     text-center mx-36 leading-myheight"
      >
        We Are Premium<br></br>
        Cleaning Company located in USA <br></br>ready to make your life
        easier!!
      </div>

      {/* bottom subheading */}
      <div className=" flex  mx-96 text-center mt-14">
        At Cleanzer Crystal Clean, we believe in building a relationship with
        every one of our customers. Our cleaning programs are tailored to meet
        your needs. We don't believe in a one size fits all approach. Need us to
        wash dishes? Do laundry? Make the beds? Not a problem!
      </div>

      <div
        className="flex mt-10 mx-auto h-16
mb-40 space-x-20"
      >
        <Button title={"Book A Schedule "} btntype={"bluesvg"}>
          {" "}
        </Button>
        <Button title={"Our Best Offer"} btntype={"outlined"}></Button>
      </div>
    </div>
  );
}
