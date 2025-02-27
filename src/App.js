import { useEffect, useState, useRef } from "react";

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-xl p-8 max-w-lg text-center border border-white/20">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg">
          Let’s Get to Know You! 🤝
        </h1>
        <p className="mt-4 text-lg text-white/90 animate-fade-in" aria-live="polite">
          {status}
        </p>

        {/* Progress Bar */}
        <div
          className="w-full mt-6 bg-white/40 rounded-full h-4 overflow-hidden shadow-md"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="h-full bg-blue-600 transition-all duration-1000 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Animation */}
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>

        <p className="mt-4 text-white/80 text-sm">Hang tight! Redirecting soon...</p>
        <p className="mt-2 text-white">
          If not redirected,{" "}
          <a href={redirectUrl} className="text-yellow-300 font-medium underline">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}
