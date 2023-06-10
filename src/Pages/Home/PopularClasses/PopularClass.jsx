

const PopularClass = ({ classAll }) => {
    const { image, className, instructorName, seats, price } = classAll;
    return (
        <div className="card card-compact w-full bg-blue-400 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available Seats: {seats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
    );
};

export default PopularClass;