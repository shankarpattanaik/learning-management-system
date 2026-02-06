import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Unlock Your Potential with Online Learning</h1>
          <p>
            Discover new skills, achieve your goals, and transform your future
          </p>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Enroll Now
          </button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
