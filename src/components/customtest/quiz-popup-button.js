AFRAME.registerComponent("quiz-popup-button", {
  init() {
    const scene = document.querySelector("a-scene");
    this.el.addEventListener("loaded", () => {
      myPosition = {x: 5, y: 0, z: 0};
      const quizButton = this.el; // if I don't reference current el it seems to not work with interactions
      // quizButton.object3D.rotation.set(0, 180, 0);
      // Set the button's appearance
      quizButton.setAttribute("material", { color: "#94a3b8" });
      quizButton.setAttribute("slice9", { width: 1, height: 0.5 });

      // Add the button's text
      const buttonText = document.createElement("a-entity");
      buttonText.setAttribute(
        "text",
        "value: Launch Quiz Popup; color: #ffffff; align: center; width: 4"
      );
      buttonText.setAttribute("position", "0 0 0.01");
      quizButton.appendChild(buttonText);

      quizButton.setAttribute("tags", "singleActionButton: true;");
      quizButton.setAttribute("is-remote-hover-target", "");
      quizButton.setAttribute("hoverable", "");
      quizButton.setAttribute("interactable", "");
      // Add rounded-text-button mixin for appearance
      quizButton.setAttribute("mixin", "rounded-text-button");
      quizButton.setAttribute("id", "vanessa-quiz-popup-button");

      quizButton.object3D.position.set(myPosition.x, myPosition.y, myPosition.z);
      // Listen for clicks on the button
      quizButton.object3D.addEventListener("interact", () => { 
        this.openQuizPopup();
        scene.emit("vanessa");
        console.log("should have emitted vanessa");
      });
    });
  },
  openQuizPopup: function () {
    const quizPopupScript = document.createElement("script");
    quizPopupScript.src = "https://vscape-labs.involve.me/embed?type=popup";
    quizPopupScript.onload = () => {
      involvemeEmbedPopup.createTriggerEvent({
        projectUrl: "test-iq-test-copy",
        organizationUrl: "https://vscape-labs.involve.me",
        embedMode: "sidePanel",
        triggerEvent: "exit",
        popupSize: "medium",
        position: "right",
      })
      console.log("vanessa window.involvemeEmbedPopup", involvemeEmbedPopup);
    };
  
    document.body.appendChild(quizPopupScript); 
  },
});