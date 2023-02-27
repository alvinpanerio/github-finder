import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  const handleBack = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-8xl font-bold">Oops!</h1>
        <p className="text-5xl">404 - Page Not Found!</p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => handleBack("/")}
        >
          <FaHome className="mr-2" /> Back to home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
