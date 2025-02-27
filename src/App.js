// RedirectPage.js
import React, { useEffect, useState, useRef } from "react";
import "./App.css";

export default function RedirectPage() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Eager to learn about you 🤩");
  const intervalRef = useRef(null);
  const redirectUrl =
    "https://forms.zohopublic.in/contactyesp1/form/YESPTechRequirementGatheringForm/formperma/rAQP8PpHlnw9721tr9V4NxNkuIJvjQOKnYvALP1gqKE";

  useEffect(() => {
    const statuses = [
      "Eager to learn about you 🤩",
      "Getting to know your business...",
      "Understanding your vision 🚀",
      "Preparing for an awesome experience 🎯",
    ];

    let step = 0;
    intervalRef.current = setInterval(() => {
      if (step < statuses.length) {
        setStatus(statuses[step]);
        setProgress((step + 1) * 25);
        step++;
      } else {
        clearInterval(intervalRef.current);
        window.location.href = redirectUrl; // Redirect after animation
      }
    }, 1200);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Let’s Get to Know You! 🤝</h1>
        <p className="status" aria-live="polite">{status}</p>

        {/* Progress Bar */}
        <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Loading Animation */}
        <div className="spinner"></div>

        <p className="info">Hang tight! Redirecting soon...</p>
        <p className="redirect">
          If not redirected, <a href={redirectUrl} className="link">click here</a>
        </p>
      </div>
    </div>
  );
}
