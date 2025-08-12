'use client';

export default function Pricing() {
  return (
    <div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ 
            color: "#0caeb8", 
            fontWeight: 600, 
            fontSize: "1rem", 
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1rem"
          }}>
            Coming Soon
          </h2>
          <h1 style={{ 
            fontWeight: 700, 
            fontSize: "3rem", 
            margin: "0 0 1rem 0", 
            color: "#1a1a1a",
            lineHeight: "1.2"
          }}>
            Kimbo is Coming
          </h1>
          <p style={{ 
            fontSize: "1.125rem", 
            color: "#666", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Get ready for adaptive, AI-powered learning adventures.
          </p>
        </div>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          {/* Coming Soon Card */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "3rem 2.5rem",
            textAlign: "center",
            position: "relative",
            border: "2px solid #0caeb8",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
          }}>
            <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#0caeb8", color: "white", padding: "0.5rem 1rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>Coming Soon</div>
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontWeight: "700", 
                fontSize: "2rem", 
                color: "#1a1a1a", 
                marginBottom: "1rem"
              }}>
                Kimbo is Coming Soon
              </h3>
              <p style={{ 
                color: "#6b7280", 
                fontSize: "1.125rem", 
                lineHeight: "1.6",
                marginBottom: "2rem"
              }}>
                Get ready for adaptive, AI-powered learning adventures.
              </p>
            </div>
            <button 
              onClick={() => window.location.href = '#contact'}
              style={{ 
                width: "100%", 
                padding: "1rem 2rem", 
                backgroundColor: "#0caeb8", 
                color: "white", 
                border: "none", 
                borderRadius: "8px", 
                fontSize: "1rem", 
                fontWeight: "600", 
                cursor: "pointer", 
                transition: "all 0.2s ease" 
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 