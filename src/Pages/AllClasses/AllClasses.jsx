import { useEffect, useState } from "react";
import AllClass from "./AllClass";
import { Fade, Slide } from "react-awesome-reveal";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allClasses/approved`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <Slide>
        <h2 className="text-blue-400 font-bold text-2xl md:text-4xl text-center">
          ~~ All Classes ~~
        </h2>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
      <p className="mt-3 text-center text-gray-600">
        Join our Sports class today and embark on a journey of personal and <br />
        professional growth. Explore your passions, learn from industry experts.
      </p>
      </Fade>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {classes.map((classAll) => (
          <AllClass key={classAll._id} classAll={classAll}></AllClass>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
