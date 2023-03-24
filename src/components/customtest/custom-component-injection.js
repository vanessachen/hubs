AFRAME.registerSystem("custom-component-injection", {
  init() {
    console.log("custom-component-injection system initialized");
    this.el.addEventListener("loaded", () => {
      const textareaEntity = document.createElement("a-entity");
      textareaEntity.setAttribute("class", "textarea");
      textareaEntity.setAttribute("position", "1 2 3");
      textareaEntity.setAttribute("textarea", {
        cols: 20,
        rows: 4,
        text: "TEST1 this is a multiline textarea",
        backgroundColor: "#01579b",
        color: "white",
        selectionColor: "black",
        disabledBackgroundColor: "red",
        disabled: false,
      });

      const groundEntity = document.createElement("a-plane");
      groundEntity.setAttribute("src", "#groundTexture");
      groundEntity.setAttribute("rotation", "-90 0 0");
      groundEntity.setAttribute("height", "100");
      groundEntity.setAttribute("width", "100");

      this.el.appendChild(textareaEntity);
      this.el.appendChild(groundEntity);
    });
  },
});
