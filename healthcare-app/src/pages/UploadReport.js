import { useState } from "react";
import "../styles/uploadReport.css";
function UploadReport() {
  const [file, setFile] = useState(null);

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!file) {
      alert("Please upload a medical report (PDF or Image)");
      return;
    }
    alert("File uploaded successfully: " + file.name);
  }

  return (
    <div className="container">
      <h1>Upload Medical Report</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadReport;
