AFRAME.registerComponent("quiz-popup-button", {
  init: function () {
    // Set the button's appearance
    this.el.setAttribute("geometry", {
      primitive: "plane",
      width: 1,
      height: 0.5,
    });
    this.el.setAttribute("material", { color: "#94a3b8" });

    // Add the button's text
    const buttonText = document.createElement("a-entity");
    buttonText.setAttribute(
      "text",
      "value: Launch Quiz Popup; color: #ffffff; align: center; width: 4"
    );
    buttonText.setAttribute("position", "0 0 0.01");
    this.el.appendChild(buttonText);

    this.el.setAttribute("tags", "singleActionButton: true;");
    this.el.setAttribute("is-remote-hover-target", "");
    this.el.setAttribute("hoverable", "");
    // this.el.setAttribute("interactable", "");
    // Add an empty media-loader component
    // this.el.setAttribute("media-loader", {});
    // Add rounded-text-button mixin for appearance
    this.el.setAttribute("mixin", "rounded-text-button");
    this.el.setAttribute("id", "vanessa-quiz-popup-button");

    // Listen for clicks on the button
    // this.el.addEventListener("interact", () => {
    this.el.object3D.addEventListener("interact", () => { // vanessa, this is how to register a button click.
      this.openQuizPopup();
    });
  },

  // openQuizPopup: function () {
  //   console.log("vanessa openQuizPopup");
  //   const quizPopupScript = document.createElement("script");
  //   quizPopupScript.src = "https://vscape-labs.involve.me/embed?type=popup";
  //   quizPopupScript.onload = () => {
  //     const quizButton = document.createElement("button");
  //     quizButton.className = "involveme_popup";
  //     quizButton.setAttribute("data-project", "test-iq-test");
  //     quizButton.setAttribute("data-embed-mode", "popup");
  //     quizButton.setAttribute("data-trigger-event", "button");
  //     quizButton.setAttribute("data-popup-size", "medium");
  //     quizButton.setAttribute(
  //       "data-organization-url",
  //       "https://vscape-labs.involve.me"
  //     );
  //     quizButton.style.display = "none";
  //     document.body.appendChild(quizButton);
  //     console.log(quizButton); // got here
  //     quizButton.click();
  //     console.log(involvemeEmbedPopup); // got here
  //     // involvemeEmbedPopup.createTriggerEvent({
  //     //   projectUrl: "test-iq-test",
  //     //   organizationUrl: "https://vscape-labs.involve.me",
  //     //   embedMode: "chatButton",
  //     //   triggerEvent: "button",
  //     //   popupSize: "medium",
  //     //   buttonTextColor: "#FFFFFF",
  //     //   buttonColor: "#94a3b8",
  //     //   icon: "speech-bubble",
  //     // })
  //   };

  //   document.body.appendChild(quizPopupScript);
  //   // seems like popup just doesn't work.  chatButton does.
  //   // involvemeEmbedPopup.createTriggerEvent({
  //   //   projectUrl: "test-iq-test",
  //   //   organizationUrl: "https://vscape-labs.involve.me",
  //   //   embedMode: "chatButton",
  //   //   triggerEvent: "button",
  //   //   popupSize: "medium",
  //   //   buttonTextColor: "#FFFFFF",
  //   //   buttonColor: "#94a3b8",
  //   //   icon: "speech-bubble",
  //   // })
  // },


  openQuizPopup: function () {
    console.log("vanessa openQuizPopup");
    const quizPopupScript = document.createElement("script");
    quizPopupScript.src = "https://vscape-labs.involve.me/embed?type=popup";
    quizPopupScript.onload = () => {
      involvemeEmbedPopup.createTriggerEvent({
        projectUrl: "test-iq-test",
        organizationUrl: "https://vscape-labs.involve.me",
        embedMode: "sidePanel",
        triggerEvent: "exit",
        popupSize: "medium",
        position: "right",
      })
      console.log("vanessa window.involvemeEmbedPopup", involvemeEmbedPopup);
      involvemeEmbedPopup.trigger();
    };
  
    document.body.appendChild(quizPopupScript);

    // not working to close itself.
    // document.addEventListener("keydown", (event) => {
    //   if (event.key === "Escape") {
    //     const sidePanel = document.querySelector(".involveme-embed-side-panel");
    //     if (sidePanel) {
    //       sidePanel.style.display = "none";
    //     } 
    //   }
    // });
    
  },
  

  // openQuizPopup: function () {
  //   console.log("vanessa openQuizPopup");
  //   const quizPopupScript = document.createElement("script");
  //   quizPopupScript.src = "https://vscape-labs.involve.me/embed?type=popup";
  //   quizPopupScript.onload = () => {
  //     const quizButton = document.createElement("button");
  //     quizButton.className = "involveme_popup";
  //     quizButton.setAttribute("data-project", "test-iq-test");
  //     quizButton.setAttribute("data-embed-mode", "popup");
  //     quizButton.setAttribute("data-trigger-event", "button");
  //     quizButton.setAttribute("data-popup-size", "medium");
  //     quizButton.setAttribute(
  //       "data-organization-url",
  //       "https://vscape-labs.involve.me"
  //     );
  //     quizButton.style.display = "none";
  //     document.body.appendChild(quizButton);
  
  //     // Custom function to simulate a button click event
  //     const simulateClick = (elem) => {
  //       console.log("vanessa simulateClick", elem);
  //       const evt = new MouseEvent("click", {
  //         bubbles: true,
  //         cancelable: true,
  //         view: window,
  //       });
  //       elem.dispatchEvent(evt);
  //     };
  
  //     // Trigger the click event on the hidden button
  //     simulateClick(quizButton);
  //   };
  
  //   document.body.appendChild(quizPopupScript);
  // },
  
});
