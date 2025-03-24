class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("appointment")) {
        this.actionProvider.handleAppointment();
      } else if (lowerCaseMessage.includes("doctor")) {
        this.actionProvider.handleDoctorInfo();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  