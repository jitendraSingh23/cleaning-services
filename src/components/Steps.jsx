import icon from "../assets/img/icon.svg";
export function Steps({ title, description, iconPath }) {
  return (
    <div className="flex  my-7">
      <div className=" flex justify-center items-center h-28 w-28 bg-stepsbg rounded-md ">
        <img src={iconPath} alt="" className="h-12 w-12 flex " />
      </div>
      <div className="px-8">
        <div className="font-semibold text-xl py-2 ">{title}</div>
        <div className="w-60">{description}</div>
      </div>
    </div>
  );
}
