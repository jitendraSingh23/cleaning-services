import buttonsvg from "../assets/img/buttonsvg.svg";
export function Buttonsvg({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
     px-8 py-5 text-xl bg-buttoncolor rounded-xl text-txcolor mr-20 flex 
     "
    >
      {title}{" "}
      <img
        src={buttonsvg}
        alt=""
        className="pl-3 justify-center items-center pt-1"
      />{" "}
    </button>
  );
}
