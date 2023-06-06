import { useNavigate } from "react-router-dom";


const NotFound = () => {
    const navigate = useNavigate();

    const handleBackHome = () =>{
        navigate('/');
    }

    return (
        <div>
            <h2>404</h2>
            <p>This Page Not Found</p>
            <button onClick={handleBackHome}>Go Back</button>
        </div>
    );
};

export default NotFound;