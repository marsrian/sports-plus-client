import Achievement from "../Achievement/Achievement";
import Carousel from "../Carousel/Carousel";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
            <div className="my-8">
                <Achievement></Achievement>
            </div>
        </div>
    );
};

export default Home;