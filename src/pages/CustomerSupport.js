import React, { useState, useEffect } from "react";
import "./CustomerSupport.css";

function CustomerSupport() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const generateResponse = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput.includes("delays")) {
      return "We apologize for any shipping delays.Typically it will take around 3 days extra if there is a delay. Our team is working hard to get your order to you as soon as possible. Thank you for your patience. If you're having difficulties please email my helper at AppleParrotsHelp@gmail.com.";
    } else if (userInput.includes("representative")) {
      return "If you would like to speak to a representative or having difficulties please email my helper at AppleParrotsHelp@gmail.com.";
    } else if (userInput.includes("merchandise materials")) {
      return "Our merchandise is made of high-quality, sustainable materials. If you have a question about a specific product, please email my helper at AppleParrotsHelp@gmail.com..";
    } else if (userInput.includes("other")){
      return "Please send us an email at AppleParrotsHelp@gmail.com."
    } else {
      return "I'm sorry, I didn't quite understand that. If you're having difficulties please email my helper at AppleParrotsHelp@gmail.com.";
    }
  };

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      const userMessage = {
        text: inputText,
        sender: "user",
      };

      const botMessage = {
        text: generateResponse(inputText),
        sender: "bot",
      };

      setMessages([...messages, userMessage, botMessage]);
      setInputText("");
    }
  };

  useEffect(() => {
    const welcomeMessage = {
      text: "Hello, I'm Audrey the Parrot who is also a bot! How can I assist you today? You can choose from the following topics: 'Shipping delays', 'Speaking to a representative', 'Merchandise materials', or 'Other'.",
      sender: "bot",
    };
    setMessages([welcomeMessage]);
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessageSend();
    }
  };
  
  return (
    <div className="customersupport">
      <h1>Contact</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress} 
          className="message-input"
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleMessageSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default CustomerSupport;
