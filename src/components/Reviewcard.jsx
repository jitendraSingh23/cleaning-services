import iconquote from "../assets/img/iconquote.svg";
import rating from "../assets/img/rating.svg";

export function Reviewcard({ description, clientname, profession, stars ,imagePath}) {
  return (
    <div className="flex flex-col border-2 border-greylight  p-10 ml-10 rounded-xl mt-20 ">
      <div className="h-14 w-14 bg-buttoncolor flex justify-center items-center rounded-full relative -top-16">
        <img src={iconquote} alt="" />
      </div>
      <div className="relative -top-9">{description}</div>
      <hr className="relative -top-6" />
      <div className="flex ">
        <div className="h-16 w-16">
          <img src={imagePath} alt="" className="" />{" "}
        </div>
        <div className="flex flex-col pl-6">
          <div className="text-xl font-medium">{clientname}</div>
          <div className="text-xl text-greylight opacity-95">{profession}</div>
          <div className="relative left-36 -top-5">
            <img src={rating} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
