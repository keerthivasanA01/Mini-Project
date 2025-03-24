import React from "react";
import "../styles/diseasePrediction.css";
function DiseasePrediction() {
  return (
    <div className="container">
      <h1>Disease Prediction</h1>
      <p>Upload a medical report (PDF or Image) for analysis.</p>
      <input type="file" accept="application/pdf, image/*" />
      <button>Upload & Predict</button>
    </div>
  );
}

export default DiseasePrediction;
