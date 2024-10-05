import { Button } from "../components/Button";
import { Servicescard } from "../components/Servicescard";
import { Steps } from "../components/Steps";
import people from "../assets/img/people.png";
import person from "../assets/img/person.png";
import homesvg from "../assets/img/homesvg.svg";
import icon from "../assets/img/icon.svg";

export function Services() {
  return (
    <div className="flex justify-start ml-28 flex-col">
      <div className="items-start uppercase text-buttoncolor font-medium">
        —— best services
      </div>
      <div className="capitalize text-4xl font-semibold my-2">
        What Our Services
      </div>
      <div className="flex justify-between mb-6 h-20 items-center ">
        <div
          className="text-customgrey w-1/3 
    "
        >
          While we can customize your cleaning plan to suit your needs, most
          clients schedule regular cleaning services:
        </div>
        <div className="h-14 mr-28">
          <Button title={"See More"} btntype={"bluenonsvg"}></Button>
        </div>
      </div>
      <div className="grid grid-cols-3 mr-28 gap-20 mt-12 mb-28">
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
        <Servicescard
          title={"Recurring Cleaning"}
          description={
            "We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty."
          }
          iconPath={homesvg}
        ></Servicescard>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div className="items-start uppercase text-buttoncolor font-medium">
            —— Get our Services
          </div>
          <div className="capitalize text-4xl font-semibold my-2">
            How To Get Our Service
          </div>
          <div className="mr-10 pr-16 pt-14">
            <Steps
              title={"Choose Your Time"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              iconPath={icon}
            ></Steps>
            <hr className="bg-greylight opacity-25" />
            <Steps
              title={"Choose Your Time"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              iconPath={icon}
            ></Steps>
            <hr className="bg-greylight opacity-25" />
            <Steps
              title={"Choose Your Time"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              iconPath={icon}
            ></Steps>
          </div>
        </div>
        <div className="pl-20">
          <img src={people} alt="" />
          <div className="mt-6 flex justify-center items-center">
            <img src={person} alt="" />
            <div className="px-5 mr-24">
              {" "}
              <span className="font-bold">Fringilla scelerisque</span> in
              imperdiet nisi erat in id. Vel fermentum aenean aenean id ornare
              vitae sapien nulla auctor. At nisl sem eget orci pretium sed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
