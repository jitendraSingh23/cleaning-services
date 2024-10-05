import icon from "../assets/img/logo.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import instagram from "../assets/img/instagram.svg";
import youtube from "../assets/img/youtube.svg";
import phone from "../assets/img/phonesvg.svg";
import email from "../assets/img/emailsvg.svg";
import loaction from "../assets/img/locationsvg.svg";

export function Footer() {
  return (
    <div>
      <div className="flex justify-between mx-28 my-20">
        <div>
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="w-80 my-6">
            We Are Premium Cleaning Company in USA ready to make your life
            easier!!
          </div>
          <div className="flex space-x-3">
            <div className="cursor-pointer">
              <img src={facebook} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={twitter} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={instagram} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-buttoncolor text-2xl font-medium py-4">
            Navigation
          </div>
          <div className="flex flex-col space-y-2 text-lg">
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">About Us</div>
            <div className="cursor-pointer">Services</div>
            <div className="cursor-pointer">Contact Us</div>
          </div>
        </div>
        <div>
          {" "}
          <div className="text-buttoncolor text-2xl font-medium py-4">
            Quick Links
          </div>
          <div className="flex flex-col space-y-2 text-lg">
            <div className="cursor-pointer">Privacy Policy</div>
            <div className="cursor-pointer">Terms Of Service</div>
            <div className="cursor-pointer">Disclaimer</div>
            <div className="cursor-pointer">Faq</div>
          </div>
        </div>
        <div>
          {" "}
          <div className="text-buttoncolor text-2xl font-medium py-4">
            Contact Info
          </div>
          <div className="flex flex-col space-y-2 text-lg">
            <div className="flex items-center cursor-pointer">
              <img className="pr-3 h-5" src={phone} alt="" /> 1234567890
            </div>
            <div className="flex items-center cursor-pointer">
              <img className="pr-3 h-5" src={email} alt="" />{" "}
              jitendrasingh2ws@gmail.com
            </div>
            <div className="flex items-center cursor-pointer">
              <img className="pr-3 h-5" src={loaction} alt="" /> 1111 Avenue
              Francis Road,
              <br /> Laval, USA
            </div>
          </div>
        </div>
      </div>
      <div className="bg-buttoncolor text-txcolor text-center py-4">
        Copyright ©Hydra 2023 | All Rights Reserved
      </div>
    </div>
  );
}
