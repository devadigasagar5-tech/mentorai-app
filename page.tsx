'use client'
import { useState } from "react";

export default function Home() {
  const [screen, setScreen] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (email && pass) setScreen("mentors");
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0B0F1A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      padding: "20px",
    }}>
      <div style={{
        background: "#1A2035",
        border: "1px solid #232C45",
        borderRadius: 20,
        padding: 32,
        width: "100%",
        maxWidth: 400,
        textAlign: "center",
      }}>
        <div style={{ fontSize: 48 }}>🎯</div>
        <h1 style={{ color: "#F0F4FF", fontSize: 28, fontWeight: 800 }}>
          Mentor<span style={{ color: "#F5A623" }}>AI</span>
        </h1>
        <p style={{ color: "#7B8DB0", marginBottom: 24 }}>
          Your personal AI mentor. Every day.
        </p>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          style={{
            width: "100%", padding: "12px 14px",
            background: "#131929", border: "1px solid #232C45",
            borderRadius: 10, color: "#F0F4FF", fontSize: 15,
            marginBottom: 12, boxSizing: "border-box",
          }}
        />
        <input
          value={pass}
          onChange={e => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          style={{
            width: "100%", padding: "12px 14px",
            background: "#131929", border: "1px solid #232C45",
            borderRadius: 10, color: "#F0F4FF", fontSize: 15,
            marginBottom: 20, boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%", padding: "14px 0",
            background: "#F5A623", color: "#0B0F1A",
            border: "none", borderRadius: 12,
            fontWeight: 800, fontSize: 16, cursor: "pointer",
          }}
        >
          Enter Your Journey →
        </button>

        {screen === "mentors" && (
          <p style={{ color: "#3DDC97", marginTop: 20, fontWeight: 700 }}>
            ✅ Login works! Next step loading...
          </p>
        )}
      </div>
    </main>
  );
}