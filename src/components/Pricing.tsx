'use client';

import GlowButton from './GlowButton';
import FAQs from './FAQs';

export default function Pricing() {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#0caeb8", fontWeight: 700, fontSize: 18 }}>Pricing</h2>
        <p style={{ textAlign: "center", fontWeight: 700, fontSize: 36, margin: "1rem 0 4rem 0", color: "#000" }}>
          Choose the right plan for you
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8rem",
          flexWrap: "wrap"
        }}>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                width: 260,
                padding: "20px 1px",
                margin: "10px 0",
                textAlign: "center",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4)",
                borderRadius: "10px",
                background: "linear-gradient(45deg, #e6f7ff 0%, #ffffff 100%)"
              }}
            >
              <div style={{ padding: "20px" }}>
                <div style={{ fontWeight: 800, textTransform: "uppercase", color: "black", marginTop: "10px", fontSize: "25px", letterSpacing: "1px" }}>
                  {i === 0 ? "Freemium" : i === 1 ? "Pro" : "Enterprise"}
                </div>
                <div style={{ color: "black", fontWeight: 800, fontSize: "50px" }}>
                  {i === 0 ? "Free" : i === 1 ? "$30/month" : "Contact Sales"}
                </div>
                <div style={{ color: "black", marginTop: "10px", fontSize: "14px" }}>
                  {i === 0 ? "Ideal for: Parents & teachers trying out Kimbo" : i === 1 ? "Ideal for: Parents & individual teachers who want deeper customization" : "Ideal for: School districts & educational organizations"}
                </div>
              </div>
              <button
                style={{
                  boxSizing: "border-box",
                  border: 0,
                  borderRadius: "20px",
                  color: "white",
                  padding: "1em 1.8em",
                  background: "#0caeb8",
                  display: "flex",
                  transition: "0.2s background",
                  alignItems: "center",
                  gap: "0.6em",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "90%"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#000000";
                  const arrow = e.currentTarget.querySelector('.arrow');
                  if (arrow) {
                    (arrow as HTMLElement).style.background = "white";
                    (arrow as HTMLElement).style.transform = "translateX(5px)";
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#0caeb8";
                  const arrow = e.currentTarget.querySelector('.arrow');
                  if (arrow) {
                    (arrow as HTMLElement).style.background = "#0caeb8";
                    (arrow as HTMLElement).style.transform = "translateX(0)";
                  }
                }}
              >
                {i === 0 ? "Free, forever" : i === 1 ? "$30/month per user" : "Contact sales"}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="arrow" style={{ marginTop: "1px", width: "10px", background: "#0caeb8", height: "2px", position: "relative", transition: "0.2s", transform: "translateX(0)" }}>
                    <div style={{ content: "", boxSizing: "border-box", position: "absolute", border: "solid white", borderWidth: "0 2px 2px 0", display: "inline-block", top: "-3px", right: "3px", transition: "0.2s", padding: "3px", transform: "rotate(-45deg)", width: "5px", height: "5px" }}></div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <FAQs />
      </div>
    </div>
  );
}

// Add the button styles
const buttonStyles = `
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(193, 163, 98);
  border: 2px solid rgb(193, 163, 98);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(193, 163, 98);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
}

.button:active {
  scale: 1;
}
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = buttonStyles;
  document.head.appendChild(styleSheet);
} 