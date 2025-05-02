"use client"
import { useState } from "react";

const GettingStarted = () => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25); // Initial progress
  const [formData, setFormData] = useState({
    websiteLink: "",
    tone: "",
    audience: "",
    format: "",
  });

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      setProgress(progress + 25); // Increment progress by 25% per step
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a1a1a", // Matches the landing page background
        color: "#ffffff", // White text for better contrast
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#2c2c2c", // Darker background for the card
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Progress Bar */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              height: "10px",
              width: "100%",
              backgroundColor: "#444",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                height: "10px",
                width: `${progress}%`,
                backgroundColor: "#FF5C39", // Matches the orange accent color
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <p style={{ textAlign: "right", margin: "5px 0" }}>{progress}% Completed</p>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Step 1: Enter Your Website Link</h2>
            <input
              type="text"
              name="websiteLink"
              placeholder="Paste your website link here"
              value={formData.websiteLink}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleNextStep}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF5C39", // Matches the orange accent color
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Step 2: Select a Tone</h2>
            <select
              name="tone"
              value={formData.tone}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select Tone</option>
              <option value="Professional">Professional</option>
              <option value="Casual">Casual</option>
              <option value="Friendly">Friendly</option>
              <option value="Formal">Formal</option>
            </select>
            <button
              onClick={handleNextStep}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF5C39",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Step 3: Select Your Audience</h2>
            <select
              name="audience"
              value={formData.audience}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select Audience</option>
              <option value="General">General</option>
              <option value="Technical">Technical</option>
              <option value="Non-Technical">Non-Technical</option>
              <option value="Business">Business</option>
            </select>
            <button
              onClick={handleNextStep}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF5C39",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ marginBottom: "20px" }}>Step 4: Select Content Format</h2>
            <select
              name="format"
              value={formData.format}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select Format</option>
              <option value="Blog">Blog</option>
              <option value="Social Media Post">Social Media Post</option>
              <option value="Email">Email</option>
              <option value="Ad Copy">Ad Copy</option>
            </select>
            <button
              onClick={() => alert("Process Completed!")}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF5C39",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;