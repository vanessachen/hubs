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
    kickButton.setAttribute("kick-button", "");
    kickButton.setAttribute("id", "vanessakickbuttontest2");
    kickButton.setAttribute("position", position);
    kickButton.setAttribute("scale", "4.8 4.8 4.8");

    const kickButtonText = document.createElement("a-entity");
    kickButtonText.setAttribute("text", "value:Kick; textAlign:center;");
    kickButtonText.setAttribute("text-raycast-hack", "");
    // kickButtonText.setAttribute("visible-if-permitted", "kick_users");
    kickButtonText.setAttribute("position", "0 0 0");

    kickButton.appendChild(kickButtonText);
    this.el.appendChild(kickButton);
  },
});
