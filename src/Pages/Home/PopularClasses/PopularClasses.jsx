import { useEffect, useState } from "react";
import PopularClass from "./PopularClass";
import { Slide } from "react-awesome-reveal";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://sports-plus-server.vercel.app/popularClass/approved`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);

  return (
    <div className="mt-20">
      <Slide>
        <h2 className="text-blue-400 font-bold text-2xl md:text-4xl text-center">
          ~~ Popular Classes ~~
        </h2>
      </Slide>
      <p className="text-gray-600 mt-3 text-center">
        Discover our selection of popular classes designed to meet your
        interests.
      </p>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {classes.slice(0, 6).map((classAll) => (
          <PopularClass key={classAll._id} classAll={classAll}></PopularClass>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
