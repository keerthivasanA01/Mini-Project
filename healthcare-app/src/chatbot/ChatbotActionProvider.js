class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you?");
      this.updateChatbotState(message);
    }
  
    handleAppointment() {
      const message = this.createChatBotMessage("You can book an appointment through our online portal.");
      this.updateChatbotState(message);
    }
  
    handleDoctorInfo() {
      const message = this.createChatBotMessage("Our doctors are available 24/7. Would you like to see a list of specialists?");
      this.updateChatbotState(message);
    }
  
    handleUnknown() {
      const message = this.createChatBotMessage("I'm not sure how to respond to that. Can you rephrase?");
      this.updateChatbotState(message);
    }
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  