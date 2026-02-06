import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ isAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <Link to="/">SkillShaper</Link>
      </div>

      <div
        className={`links ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        {isAuth ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button
          type="button"
          className="common-btn"
          onClick={() => navigate("/admin-login")}
        >
          Admin
        </button>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
