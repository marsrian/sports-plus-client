import { useEffect, useState } from "react";
import AllClass from "./AllClass";

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
      <h2 className="text-blue-400 font-bold text-2xl md:text-4xl text-center">
        ~~ All Classes ~~
      </h2>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {
            classes.map(classAll => <AllClass
            key={classAll._id}
            classAll={classAll}
            ></AllClass>)
        }
      </div>
    </div>
  );
};

export default AllClasses;
