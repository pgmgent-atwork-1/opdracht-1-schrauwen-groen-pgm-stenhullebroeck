(() => {
  const private = REFERENCES.filter((i) => {
    return i.type === "private";
  });
  const b2b = REFERENCES.filter((i) => {
    return i.type === "b2b";
  });
  const public = REFERENCES.filter((i) => {
    return i.type === "public";
  });

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
    buildUI() {
      if (this.$private != null) {
        this.$private.innerHTML +=
          this.generateHTMLForFilteredReferences(private);
      }
      if (this.$b2b != null) {
        this.$b2b.innerHTML += this.generateHTMLForFilteredReferences(b2b);
      }
      if (this.$public != null) {
        this.$public.innerHTML +=
          this.generateHTMLForFilteredReferences(public);
      }
    },
    generateHTMLForFilteredReferences(element) {
      return element
        .map((reference) => {
          return `<div class="reference-filtered" id="${reference.id}">
        <img src="${reference.image}" alt="reference" />
        <p>${reference.description}</p>
        </div>`;
        })
        .join("");
    },
  };
  app.initialize();
})();
