import { Button } from "../components/Button";
import { Contactsteps } from "../components/Contactsteps";
import { Form } from "../components/Form";
import phonesvg from "../assets/img/phonesvg.svg";
import emailsvg from "../assets/img/emailsvg.svg";
import locationsvg from "../assets/img/locationsvg.svg";

export function Contact() {
  return (
    <div>
      <div className="grid grid-cols-2 mt-36">
        <div className="flex justify-center flex-col ml-28 mt-28 pr-16">
          <div className="items-start uppercase text-buttoncolor font-medium">
            —— Contact
          </div>
          <div className="capitalize text-4xl font-semibold my-2">
            Get In Touch
          </div>
          <div
            className="text-customgrey  
    "
          >
            Fill up the form and our Team will get back to you within 24 hours.
          </div>
          <Contactsteps
            title={"Phone"}
            description={"1234567890"}
            iconPath={phonesvg}
          ></Contactsteps>
          <hr className="bg-greylight opacity-25" />
          <Contactsteps
            title={"Email"}
            description={"jitendrasingh2ws@gmail.com"}
            iconPath={emailsvg}
          ></Contactsteps>
          <hr className="bg-greylight opacity-25" />
          <Contactsteps
            title={"location"}
            description={"1111 Avenue Francis Road,Laval,USA"}
            iconPath={locationsvg}
          ></Contactsteps>
        </div>
        <div className="w-full h-auto pr-28 pl-20 ">
          {" "}
          <Form></Form>{" "}
        </div>
      </div>
      <div className="mx-28 rounded-3xl my-32 py-10 h-auto bg-buttoncolor flex flex-col items-center">
        <div className="text-6xl text-center font-bold text-txcolor">
          Best Cleaning <br /> Service Company
        </div>
        <div className="text-txcolor leading-8 w-1/2 text-center pt-4 ">
          Quisque imperdiet mauris nec faucibus vestibulum. Ut vestibulum est ac
          hendrerit pharetra. Integer sit amet laoreet lectus
        </div>
        <div className="h-16 my-5">

            <Button title={"Book Appointment"} btntype={"yellow"}></Button>
          {/* <button className="w-60 h-20 bg-yellow rounded-lg font-medium text-lg hover:bg-opacity-85 hover:scale-95 my-5">
            Book Appointment
          </button> */}
        </div>
      </div>
    </div>
  );
}
