(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$private = document.getElementById("private");
      this.$b2b = document.getElementById("b2b");
      this.$public = document.getElementById("public");
    },
    buildUI() {},
    generateHTMLForFilteredReferences() {
      return REFERENCES.map((reference) => {
        return ``;
      }).join("");
    },
  };
  app.initialize();
})();
