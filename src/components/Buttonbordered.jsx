import buttonsvgblue from "../assets/img/buttonsvgblue.svg";

export function Buttonbordered({ title }) {
  return (
    <button
      className="
        px-8 py-5 text-xl rounded-xl text-buttoncolor border-2 border-buttoncolor  mr-20 flex 
        "
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
