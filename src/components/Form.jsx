import { Button } from "./Button";

export function Form() {
  return (
    <div className="bg-buttoncolor rounded-xl flex flex-col  w-full h-auto px-20 py-20 mt-16">
      <label htmlFor="input" className="text-txcolor">
        Name*
      </label>
      <input type="text" placeholder="Your Name" className="mb-5 py-2 pl-2" />

      <label htmlFor="input" className="text-txcolor">
        Email*
      </label>
      <input type="text" placeholder="Your Email" className="mb-5 py-2 pl-2" />

      <label htmlFor="input" className="text-txcolor">
        Message*
      </label>

      <textarea
        name=""
        id=""
        className="mb-5 pb-24 pt-2 pl-2 overflow-hidden max-h-40 "
      ></textarea>

      <div className="items-center h-16 ">
        <Button title={"Book A Schedule"} btntype={"yellow"}></Button>
      </div>
    </div>
  );
}
