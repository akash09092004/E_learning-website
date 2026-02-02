import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashbord = ({ user }) => {
  const navigate = useNavigate();

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
    <div>
      <Layout>
        <div className="main-content">
          <div className="box" onClick={() => navigate("/admin/course")} style={{ cursor: "pointer" }}>
            <p>Total Courses</p>
            <p>{stats.totalCoures}</p>
          </div>
          <div className="box" onClick={() => navigate("/admin/course")} style={{ cursor: "pointer" }}>
            <p>Total Lectures</p>
            <p>{stats.totalLectures}</p>
          </div>
          <div className="box" onClick={() => navigate("/admin/users")} style={{ cursor: "pointer" }}>
            <p>Total Users</p>
            <p>{stats.totalUsers}</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashbord;
