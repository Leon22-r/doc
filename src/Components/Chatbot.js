import React, { useEffect } from "react";
import "../styles/chatbot.css";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically load the Dialogflow Messenger script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="chatbot">
      <h2>Chat with Our Mental Health Bot</h2>
      <df-messenger
        chat-title="Chat-Doctor"
        agent-id="f683295c-4813-4bbd-9479-cb2512d18d4d"
        language-code="en"
      ></df-messenger>
    </section>
  );
};

export default Chatbot;
