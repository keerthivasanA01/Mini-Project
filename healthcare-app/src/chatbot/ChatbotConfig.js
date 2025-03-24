import { createChatBotMessage } from "react-chatbot-kit";

const botName = "HealthBot";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. How can I assist you today?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#5A9",
    },
    chatButton: {
      backgroundColor: "#5A9",
    },
  },
};

export default config;
