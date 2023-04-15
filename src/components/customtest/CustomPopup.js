// import React, { useState } from "react";
// import "./CustomPopup.css";

// const CustomPopup = ({ onClose }) => {
//   const [messages, setMessages] = useState([]);

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     const messageInput = e.target.elements.message;
//     setMessages((prev) => [
//       ...prev,
//       { type: "user", content: messageInput.value },
//     ]);
//     messageInput.value = "";
//   };

//   return (
//     <div className="app-chatbot-container">
//       <div className="app-chatbot-messages">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`app-chatbot-message ${message.type}`}
//           >
//             {message.content}
//           </div>
//         ))}
//       </div>
//       <form className="app-chatbot-input" onSubmit={handleMessageSubmit}>
//         <input type="text" name="message" placeholder="Type your message..." />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default CustomPopup;
import React from 'react';
import './CustomPopup.css'; // Import the CSS file

import Chatbot from "react-chatbot-kit";
import config from "./chatbot/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

export function CustomPopup({ isVisible, onClose }){
  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div className="involveme_embed_popup-bg" onClick={onClose}></div>
      <div className="involveme_embed_popup open">
        <div className="involveme_embed_popup-container">
          <div className="involveme_embed_popup-close" onClick={onClose}>
            &times;
          </div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
};


// // AFRAME.registerComponent("custom-popup", {
// //   init() {
// //     const scene = document.querySelector("a-scene");
  
// //     // Create the custom popup elements.
// //     const popupBackground = document.createElement("a-plane");
// //     const popupContainer = document.createElement("a-entity");
// //     const closeButton = document.createElement("a-entity");
  
// //     // Set the attributes for the custom popup elements.
// //     popupBackground.setAttribute("id", "custom-popup-background");
// //     popupBackground.setAttribute("color", "rgba(0, 0, 0, 0.6)");
// //     popupBackground.setAttribute("width", "10");
// //     popupBackground.setAttribute("height", "10");
// //     popupBackground.setAttribute("position", "0 1.6 -3");
// //     popupBackground.setAttribute("visible", "false");
  
// //     popupContainer.setAttribute("id", "custom-popup-container");
// //     popupContainer.setAttribute("geometry", "primitive: box; width: 3; height: 2; depth: 0.1");
// //     popupContainer.setAttribute("material", "color: white");
// //     popupContainer.setAttribute("position", "0 1.6 -3");
// //     popupContainer.setAttribute("visible", "false");
  
// //     closeButton.setAttribute("id", "custom-popup-close-button");
// //     closeButton.setAttribute("geometry", "primitive: plane; width: 0.5; height: 0.5");
// //     closeButton.setAttribute("material", "color: red");
// //     closeButton.setAttribute("position", "1 1 0");
// //     closeButton.setAttribute("cursor", "rayOrigin: mouse");
// //     closeButton.setAttribute("event-set__mouseenter", "scale: 1.2 1.2 1.2");
// //     closeButton.setAttribute("event-set__mouseleave", "scale: 1 1 1");
  
// //     // Add event listeners to handle the close button interaction.
// //     closeButton.addEventListener("click", () => {
// //       this.closePopup();
// //     });
  
// //     // Append the custom popup elements to the A-Frame scene.
// //     scene.appendChild(popupBackground);
// //     scene.appendChild(popupContainer);
// //     popupContainer.appendChild(closeButton);
// //   },
  
// //   openPopup: function () {
// //     const popupBackground = document.querySelector("#custom-popup-background");
// //     const popupContainer = document.querySelector("#custom-popup-container");
  
// //     popupBackground.setAttribute("visible", "true");
// //     popupContainer.setAttribute("visible", "true");
// //   },
  
// //   closePopup: function () {
// //     const popupBackground = document.querySelector("#custom-popup-background");
// //     const popupContainer = document.querySelector("#custom-popup-container");
  
// //     popupBackground.setAttribute("visible", "false");
// //     popupContainer.setAttribute("visible", "false");
// //   },
  
// // });
