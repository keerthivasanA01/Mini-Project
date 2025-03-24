import React from "react";
import ChatbotComponent from "../components/Chatbot";
import "../styles/HospitalDetails.css";

export function HospitalDetails() {
  return (
    <div className="hospital-container">
      <h1>Welcome to Our Healthcare System</h1>
      <p>Providing the best medical services and disease prediction.</p>

      <div className="hospital-info">
        <h2>Hospital Services</h2>
        <ul>
          <li>24/7 Emergency Services</li>
          <li>Online Doctor Consultation</li>
          <li>Advanced Disease Prediction</li>
          <li>Health Reports & Diagnosis</li>
        </ul>
      </div>

      {/* Chatbot */}
      <ChatbotComponent />
    </div>
  );
}
