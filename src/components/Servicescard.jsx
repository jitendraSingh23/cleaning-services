import Learnmore from "../assets/img/Learnmore.svg";

export function Servicescard({ title, description, to, onClick, iconPath }) {
  return (
    <div className=" flex flex-col h-auto w-auto border-2 border-strocks px-6 py-8 rounded-lg">
      <div className="h-20 w-20 bg-buttoncolor rounded-md flex justify-center items-center ">
        <img src={iconPath} alt="" className="h-12 w-12 " />
      </div>
      <div className="text-2xl font-medium py-2">{title}</div>
      <div className="text-greylight text-lg leading-7 tracking-tighter w-90">
        {description}
      </div>
      <div className=" flex items-center cursor-pointer underline text-lg  text-buttoncolor text-md pt-4">
        Learn More <img className="pl-2" src={Learnmore} alt="" />
      </div>
    </div>
  );
}
