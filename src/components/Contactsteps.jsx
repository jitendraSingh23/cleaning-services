export function Contactsteps({ title, description, iconPath }) {
  return (
    <div className="flex  my-7">
      <div className=" flex justify-center items-center h-28 w-28 bg-stepsbg rounded-md ">
        <img src={iconPath} alt="" className="h-10 w-10 flex " />
      </div>
      <div className="px-8">
        <div className="font-bold text-xl py-2 text-buttoncolor ">{title}</div>
        <div className="w-60 text-lg">{description}</div>
      </div>
    </div>
  );
}
