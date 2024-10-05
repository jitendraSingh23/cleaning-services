import { Numbersvalue } from "../components/Numbersvalue";

export function Numbers() {
  return (
    <div>
      <div className="bg-buttoncolor  flex flex-col justify-center items-center text-center px- mt-14 ">
        <div className="captilize text-8xl text-txcolor py-16 leading-myheight2 font-bold">
          We Make Sanitizing Services Simple And Easy For You
        </div>
        <div className="py-4 px-6 bg-yellow rounded-lg font-medium text-lg relative top-9">
          More Than Just Cleaning
        </div>
      </div>
      <div className="text-center flex justify-center my-24 mx-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
        sollicitudin sem. Ut tempus ligula eget vestibulum dapibus. Sed ac
        pulvinar massa. Class aptent{" "}
      </div>

      <div className="flex justify-between mx-20 my-10">
        <Numbersvalue
          title={"1820+"}
          description={"Clean Houses"}
        ></Numbersvalue>
        <Numbersvalue
          title={"25+"}
          description={"Glorius Years"}
        ></Numbersvalue>
        <Numbersvalue
          title={"750+"}
          description={"Active Clients"}
        ></Numbersvalue>
        <Numbersvalue title={"55+"} description={"Team Advisor"}></Numbersvalue>
      </div>
    </div>
  );
}
