import { useEffect } from "react";

export default function InstagramWidget() {
  useEffect(() => {
    // Check if the script is already on the page
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://apps.elfsight.com/p/platform.js";
      script.id = "elfsight-script";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="elfsight-app-e575befb-b430-469d-bcf7-6e4ae8ab7fff" // Replace with your actual widget class/id from Elfsight
      style={{ width: "100%", height: "auto" }}
    ></div>
  );
}
