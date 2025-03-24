import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Dashboard.css";

export function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser?.email}!</p>

      <div className="dashboard-menu">
        <button onClick={() => alert("Navigating to Patient Records")}>
          View Patient Records
        </button>
        <button onClick={() => alert("Navigating to Disease Predictions")}>
          Disease Prediction
        </button>
        <button onClick={() => alert("Navigating to Upload Reports")}>
          Upload Reports
        </button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
export default Dashboard;