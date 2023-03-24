AFRAME.registerComponent("quiz-popup-button", {
  init() {
    const scene = document.querySelector("a-scene");
    this.el.addEventListener("loaded", () => {
      // scene.addEventListener("loadedAllSceneObjects", () => {
      //   console.log("vanessa is here in quiz loaded all scene obj");
      //   sc = document.getElementsByClassName('16x9Screenglb_1');
      //   console.log(sc);
        // myPosition = {x: 6, y: 3, z: 8};
        myPosition = {x: 5, y: 0, z: 0};
      //   if (sc.length > 0) { // vanessa temp testing for demo purposes -- append button to screen
      //     console.log("vanessa sc.length > 0", sc);
      //     myPosition = sc[0].object3D.position;
      //   }

        // const quizButton = document.createElement("a-entity");
        const quizButton = this.el;
        // quizButton.object3D.rotation.set(0, 180, 0);

        // Set the button's appearance
        quizButton.setAttribute("geometry", { // doesn't really do much
          primitive: "plane",
          width: 1,
          height: 0.5,
        });
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
        console.log(this.el);
        // this.el.appendChild(buttonText);

        // Listen for clicks on the button
        // const scene = document.querySelector("a-scene");
        quizButton.object3D.addEventListener("interact", () => { 
        // this.el.object3D.addEventListener("interact", () => {
          console.log("i am interacting with button");
          this.openQuizPopup();
          scene.emit("vanessa");
          console.log("should have emitted vanessa");
        });
      });
    // });
  },
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
    };
  
    document.body.appendChild(quizPopupScript); 
  },
});


// AFRAME.registerComponent("quiz-popup-button", {
//   init: function () {
//     // Set the button's appearance
//     this.el.setAttribute("geometry", { // doesn't really do much
//       primitive: "plane",
//       width: 10,
//       height: 0.5,
//     });
//     this.el.setAttribute("material", { color: "#94a3b8" });
//     this.el.object3D.position.set(0,-1,0);
//     this.el.setAttribute("slice9", { width: 1, height: 0.5 });

//     // Add the button's text
//     const buttonText = document.createElement("a-entity");
//     buttonText.setAttribute(
//       "text",
//       "value: Launch Quiz Popup; color: #ffffff; align: center; width: 4"
//     );
//     buttonText.setAttribute("position", "0 0 0.01");
//     this.el.appendChild(buttonText);

//     this.el.setAttribute("tags", "singleActionButton: true;");
//     this.el.setAttribute("is-remote-hover-target", "");
//     this.el.setAttribute("hoverable", "");
//     // Add rounded-text-button mixin for appearance
//     this.el.setAttribute("mixin", "rounded-text-button");
//     this.el.setAttribute("id", "vanessa-quiz-popup-button");

//     // Listen for clicks on the button
//     const scene = document.querySelector("a-scene");
//     this.el.object3D.addEventListener("interact", () => { 
//       this.openQuizPopup();
//       scene.emit("vanessa");
//       console.log("should have emitted vanessa");
//     });
//   },

//   openQuizPopup: function () {
//     console.log("vanessa openQuizPopup");
//     const quizPopupScript = document.createElement("script");
//     quizPopupScript.src = "https://vscape-labs.involve.me/embed?type=popup";
//     quizPopupScript.onload = () => {
//       involvemeEmbedPopup.createTriggerEvent({
//         projectUrl: "test-iq-test",
//         organizationUrl: "https://vscape-labs.involve.me",
//         embedMode: "sidePanel",
//         triggerEvent: "exit",
//         popupSize: "medium",
//         position: "right",
//       })
//       console.log("vanessa window.involvemeEmbedPopup", involvemeEmbedPopup);
//     };
  
//     document.body.appendChild(quizPopupScript); 
//   },
  
// });
