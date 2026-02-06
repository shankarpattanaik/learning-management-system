import { useState } from "react";
import "./auth.css";
import { useNavigate, Link } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";


const AdminLogin = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const { fetchMyCourse } = CourseData();

  const [email, setEmail] = useState("shankarpattanaik2000@gmail.com");
  const [password, setPassword] = useState("1234");

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Admin Login</h2>
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={btnLoading} type="submit" className="common-btn">
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
