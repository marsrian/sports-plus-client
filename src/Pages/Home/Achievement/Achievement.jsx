import { Slide } from "react-awesome-reveal";
import win1 from "../../../assets/win/w-1.jpg";
import win2 from "../../../assets/win/w-2.jpg";
import win10 from "../../../assets/win/w-10.jpg";
import win4 from "../../../assets/win/w-4.jpg";
import win5 from "../../../assets/win/w-5.jpg";
import win12 from "../../../assets/win/w-12.jpg";

const Achievement = () => {
  return (
    <div className="text-center max-w-screen-xl mx-auto mt-20">
      <Slide>
        <h1 className="text-blue-400 font-bold text-2xl md:text-4xl text-center mb-3">~~ Our Achievement ~~</h1>
      </Slide>

      <p className="text-gray-600 mb-8">If you want to learning best skill! join with us.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
            <img className="h-72 rounded-t-lg" src={win5} alt="" />
            <h3 className="text-lg font-medium my-3">
              Test Cricket Series Winner
            </h3>
            <p className="mb-3">Year: 2018</p>
          </Slide>
        </div>
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
            <img className="h-72 rounded-t-lg" src={win1} alt="" />
            <h3 className="text-lg font-medium my-3">Football Fest Winner</h3>
            <p className="mb-3">Year: 2018</p>
          </Slide>
        </div>
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
            <img className="h-72 rounded-t-lg" src={win10} alt="" />
            <h3 className="text-lg font-medium my-3">
              Basketball Junior Champion
            </h3>
            <p className="mb-3">Year: 2020</p>
          </Slide>
        </div>
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
            <img className="h-72 rounded-t-lg" src={win4} alt="" />
            <h3 className="text-lg font-medium my-3">
              Gymnastic Girl Champion
            </h3>
            <p className="mb-3">Year: 2021</p>
          </Slide>
        </div>
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
          <img className="h-72 w-full rounded-t-lg" src={win2} alt="" />
          <h3 className="text-lg font-medium my-3">Hockey Kids Champion</h3>
          <p className="mb-3">Year: 2021</p>
          </Slide>
        </div>
        <div className="border-2 border-gray-400 rounded-lg">
          <Slide>
          <img className="h-72 rounded-t-lg w-full" src={win12} alt="" />
          <h3 className="text-lg font-medium my-3">Badminton Winner</h3>
          <p className="mb-3">Year: 2022</p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
