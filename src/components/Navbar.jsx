import logo from "../assets/img/logo.svg";
import { Button } from "./Button";

export function Navbar() {
  return (
    <div className="flex justify-between px-12 py-10 items-center">
      <div className="pl-20">
        <img src={logo} alt="" />
      </div>
      <div className="flex space-x-16 uppercase pr-16  text-lg">
        <div className="cursor-pointer">home</div>
        <div className="cursor-pointer">jobs</div>
        <div className="cursor-pointer">faq</div>
        <div className="cursor-pointer">fr</div>
        <div className="cursor-pointer">referral</div>
      </div>
      <div className="h-16 mr-20">
        <Button title={"Request An Estimate"} btntype={"bluenonsvg"}></Button>
      </div>
    </div>
  );
}
