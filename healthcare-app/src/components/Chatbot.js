import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/ChatbotConfig";
import MessageParser from "../chatbot/ChatbotMessageParser";
import ActionProvider from "../chatbot/ChatbotActionProvider";
import "../styles/Chatbot.css";

function ChatbotComponent() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="chatbot-container">
      {showChatbot && (
        <div className="chatbot-box">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
      <button className="chatbot-button" onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? "Close Chat" : "Chat with us"}
      </button>
    </div>
  );
}

export default ChatbotComponent;
