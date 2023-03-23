AFRAME.registerComponent("kick-button-spawner", {
  init: function () {
    console.log("vanessa init kick-button-spawner");
    this.el.addEventListener("spawnKickButton", (event) => {
      this.spawnKickButton(event.detail.position);
    });
  },

  spawnKickButton: function (position) {
    console.log("vanessa made it to spawnKickButton", position); // seems to have gotten here..
    const kickButton = document.createElement("a-entity");
    // Add the networked component to the kick button
    kickButton.setAttribute("networked", "template: #interactable-media; networkId: kickButton-" + Date.now());
    kickButton.setAttribute("is-remote-hover-target", "");
    kickButton.setAttribute("tags", "singleActionButton:true;");
    kickButton.setAttribute("mixin", "rounded-text-button");
    // kickButton.setAttribute("visible-if-permitted", "kick_users");
    kickButton.setAttribute("kick-button", ""); // calling this kick-button will force it to use the kick-button default text I think...but the custom kick-button object itself doesn't require that.
    kickButton.setAttribute("id", "vanessakickbuttontest2");
    kickButton.setAttribute("position", position);
    kickButton.setAttribute("scale", "0.8 0.8 0.8");

    const kickButtonText = document.createElement("a-entity");
    kickButtonText.setAttribute("text", "value:Vanessa's temp button; textAlign:center;");
    kickButtonText.setAttribute("text-raycast-hack", "");
    // kickButtonText.setAttribute("visible-if-permitted", "kick_users");
    kickButtonText.setAttribute("position", "0 0 0");

    kickButton.appendChild(kickButtonText);
    this.el.appendChild(kickButton);


    // this one worked
    // involvemeEmbedPopup.createTriggerEvent({
    //   projectUrl: "test-iq-test",
    //   organizationUrl: "https://vscape-labs.involve.me",
    //   embedMode: "chatButton",
    //   triggerEvent: "button",
    //   popupSize: "large",
    //   buttonTextColor: "#FFFFFF",
    //   buttonColor: "#94a3b8",
    //   icon: "speech-bubble",
    // })

    console.log("vanessa hopefully did createTriggerEvent");


  },
});
