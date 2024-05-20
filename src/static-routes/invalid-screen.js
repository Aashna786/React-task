import { useNavigate } from "react-router-dom";

const InvalidScreen = () => {
  const navigate = useNavigate();

  //when using forms we use this useNavigate hook
  const navigateToMainScreen = () => {
      navigate("/"); 
    
  };

  return (
    <div>
      <h3>No Data Found</h3>
      {/* <button>
                <Link to={"/"} style={{textDecoration:"none"}}>
                Back to Home
                </Link>
            </button> */}

      <button onClick={navigateToMainScreen}>Back to Home</button>
    </div>
  );
};

export default InvalidScreen;
