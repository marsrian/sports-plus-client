
const Instructor = ({ instructor }) => {
  const { name, email, photoURL } = instructor;
  return (
    <div className="card card-compact w-full bg-blue-400 shadow-xl">
      <figure>
        <img
          src={photoURL}
          alt="Shoes"
          className="w-full h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
