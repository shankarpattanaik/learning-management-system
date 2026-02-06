import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <Layout>
      <div className="admin-dashboard">
        <div className="stats-grid">
          <div className="stat-box">
            <p className="label">Total Courses</p>
            <p className="value">{stats.totalCoures}</p>
          </div>

          <div className="stat-box">
            <p className="label">Total Lectures</p>
            <p className="value">{stats.totalLectures}</p>
          </div>

          <div className="stat-box">
            <p className="label">Total Active Users</p>
            <p className="value">{stats.totalUsers}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashbord;
