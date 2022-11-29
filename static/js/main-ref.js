(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$references = document.getElementById("references");
    },
    buildUI() {
      this.$references.innerHTML += this.generateHTMLForReferences();
    },
    generateHTMLForReferences() {
      return REFERENCES.slice(0, 6)
        .map((reference) => {
          for (i = 0; i <= [5]; i++) {
            return `<div class="reference" id="${reference.id}">
          <img src="${reference.image}" alt="reference" />
          <p>${reference.description}</p>
          </div>`;
          }
        })
        .join("");
    },
  };
  app.initialize();
})();
