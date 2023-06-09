import { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allUsers/instructor`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setInstructors(data);
      });
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-blue-400 font-bold text-2xl md:text-4xl text-center">
        ~~ Popular Instructor ~~
      </h2>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {
            instructors.slice(0,6).map(instructor => <Instructor
            key={instructor._id}
            instructor={instructor}
            ></Instructor>)
        }
      </div>
    </div>
  );
};

export default Instructors;
