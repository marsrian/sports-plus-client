import { useEffect, useState } from "react";
import Instructor from "../Home/Instructors/Instructor";
import { Fade, Slide } from "react-awesome-reveal";

const AllInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allUsers/instructor`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div className="mt-10">
      <Slide>
        <h2 className="text-blue-400 font-bold text-2xl md:text-4xl text-center">
          ~~ All Instructor ~~
        </h2>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
        <p className="mt-3 text-center text-gray-600">
          Get ready to learn from the best! Meet our incredible team of
          instructors <br /> who are eager to share their expertise and help you
          achieve your goals.
        </p>
      </Fade>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
