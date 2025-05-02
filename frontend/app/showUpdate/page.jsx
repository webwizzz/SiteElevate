"use client";

const ShowUpdate = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#1a1a1a", // Matches the landing page background
        color: "#ffffff", // White text for better contrast
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Section: Original Content */}
      <div
        style={{
          width: "48%",
          padding: "20px",
          backgroundColor: "#2c2c2c", // Darker background for the card
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#FF5C39" }}>Original Content</h2>
        <div
          style={{
            height: "400px",
            overflowY: "auto",
            padding: "10px",
            backgroundColor: "#1a1a1a",
            borderRadius: "5px",
            border: "1px solid #444",
          }}
        >
          {/* Placeholder for original content */}
          <p>Loading original content...</p>
        </div>
      </div>

      {/* Right Section: Enhanced Content */}
      <div
        style={{
          width: "48%",
          padding: "20px",
          backgroundColor: "#2c2c2c", // Darker background for the card
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#FF5C39" }}>Enhanced Content</h2>
        <div
          style={{
            height: "400px",
            overflowY: "auto",
            padding: "10px",
            backgroundColor: "#1a1a1a",
            borderRadius: "5px",
            border: "1px solid #444",
          }}
        >
          {/* Placeholder for enhanced content */}
          <p>Loading enhanced content...</p>
        </div>
      </div>
    </div>
  );
};

export default ShowUpdate;