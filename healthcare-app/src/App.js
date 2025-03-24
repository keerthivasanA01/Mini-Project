import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DiseasePrediction from "./pages/DiseasePrediction";
import UploadReport from "./pages/UploadReport";
import ChatbotComponent from "./components/Chatbot"; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/predict" element={<PrivateRoute><DiseasePrediction /></PrivateRoute>} />
            <Route path="/upload" element={<PrivateRoute><UploadReport /></PrivateRoute>} />
          </Routes>
        </div>
        {/* Chatbot added at the bottom */}
        <ChatbotComponent />
      </Router>
    </AuthProvider>
  );
}

export default App;
