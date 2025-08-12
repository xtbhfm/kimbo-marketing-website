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
            Pricing
          </h2>
          <h1 style={{ 
            fontWeight: 700, 
            fontSize: "3rem", 
            margin: "0 0 1rem 0", 
            color: "#1a1a1a",
            lineHeight: "1.2"
          }}>
            Choose the right plan for you
          </h1>
          <p style={{ 
            fontSize: "1.125rem", 
            color: "#666", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Start with our free plan and upgrade as you grow
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {/* Freemium Plan */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            position: "relative",
            border: "1px solid #e5e7eb",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
          }}>
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontWeight: "600", 
                fontSize: "1.25rem", 
                color: "#374151", 
                marginBottom: "0.5rem"
              }}>
                Freemium
              </h3>
              <div style={{ 
                color: "#1a1a1a", 
                fontWeight: "700", 
                fontSize: "3rem",
                marginBottom: "0.5rem"
              }}>
                Free
              </div>
              <div style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem",
                lineHeight: "1.5"
              }}>
                Forever
              </div>
            </div>
            
            <div style={{ 
              marginBottom: "2rem",
              textAlign: "left"
            }}>
              <p style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem", 
                lineHeight: "1.6",
                marginBottom: "1.5rem"
              }}>
                Ideal for parents & teachers trying out the platform
              </p>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                color: "#6b7280",
                fontSize: "0.875rem"
              }}>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Basic features included
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Up to 5 projects
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Community support
                </li>
              </ul>
            </div>
            
            <button style={{
              width: "100%",
              padding: "0.875rem 1.5rem",
              backgroundColor: "#f3f4f6",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e5e7eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f3f4f6";
            }}>
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            position: "relative",
            border: "2px solid #0caeb8",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
          }}>
            <div style={{ 
              position: "absolute", 
              top: "-12px", 
              left: "50%", 
              transform: "translateX(-50%)",
              backgroundColor: "#0caeb8",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              Most Popular
            </div>
            
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontWeight: "600", 
                fontSize: "1.25rem", 
                color: "#374151", 
                marginBottom: "0.5rem"
              }}>
                Pro
              </h3>
              <div style={{ 
                color: "#1a1a1a", 
                fontWeight: "700", 
                fontSize: "3rem",
                marginBottom: "0.5rem"
              }}>
                $30
              </div>
              <div style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem"
              }}>
                per month per user
              </div>
            </div>
            
            <div style={{ 
              marginBottom: "2rem",
              textAlign: "left"
            }}>
              <p style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem", 
                lineHeight: "1.6",
                marginBottom: "1.5rem"
              }}>
                Ideal for parents & individual teachers who want deeper customization
              </p>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                color: "#6b7280",
                fontSize: "0.875rem"
              }}>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Everything in Freemium
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Unlimited projects
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Advanced analytics
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Priority support
                </li>
              </ul>
            </div>
            
            <button style={{
              width: "100%",
              padding: "0.875rem 1.5rem",
              backgroundColor: "#0caeb8",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0891b2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0caeb8";
            }}>
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            textAlign: "center",
            position: "relative",
            border: "1px solid #e5e7eb",
            transition: "all 0.3s ease",
            cursor: "pointer",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
          }}>
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ 
                fontWeight: "600", 
                fontSize: "1.25rem", 
                color: "#374151", 
                marginBottom: "0.5rem"
              }}>
                Enterprise
              </h3>
              <div style={{ 
                color: "#1a1a1a", 
                fontWeight: "700", 
                fontSize: "3rem",
                marginBottom: "0.5rem"
              }}>
                Custom
              </div>
              <div style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem"
              }}>
                Contact sales
              </div>
            </div>
            
            <div style={{ 
              marginBottom: "2rem",
              textAlign: "left"
            }}>
              <p style={{ 
                color: "#6b7280", 
                fontSize: "0.875rem", 
                lineHeight: "1.6",
                marginBottom: "1.5rem"
              }}>
                Ideal for school districts & educational organizations
              </p>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0,
                color: "#6b7280",
                fontSize: "0.875rem"
              }}>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Everything in Pro
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Custom integrations
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  Dedicated support
                </li>
                <li style={{ 
                  padding: "0.5rem 0", 
                  display: "flex", 
                  alignItems: "center",
                  gap: "0.75rem"
                }}>
                  <span style={{ 
                    color: "#10b981", 
                    fontSize: "1.25rem",
                    fontWeight: "bold"
                  }}>✓</span>
                  SLA guarantees
                </li>
              </ul>
            </div>
            
            <button style={{
              width: "100%",
              padding: "0.875rem 1.5rem",
              backgroundColor: "white",
              color: "#0caeb8",
              border: "1px solid #0caeb8",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0caeb8";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#0caeb8";
            }}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
} 