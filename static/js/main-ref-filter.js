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
      this.$references = document.getElementById("references");
      //   this.$private = document.getElementById("private");
      //   this.$b2b = document.getElementById("b2b");
      //   this.$public = document.getElementById("public");
    },
    buildUI() {
      this.$references.innerHTML += this.generateHTMLForFilteredReferences(
        this.getFilteredReferences("private")
      );
      this.$references.innerHTML += this.generateHTMLForFilteredReferences(
        this.getFilteredReferences("b2b")
      );
      this.$references.innerHTML += this.generateHTMLForFilteredReferences(
        this.getFilteredReferences("public")
      );
    },
    getFilteredReferences(ref) {
      return REFERENCES.filter((i) => {
        return i.type === ref;
      });
    },
    generateHTMLForFilteredReferences(element) {
      return (
        ` <div data-type="${element}"><h2 id="private">${this.getReferenceTitle(
          element
        )}</h2>` +
        element
          .map((reference) => {
            return `<div class="reference-filtered" id="${reference.id}">
        <img src="${reference.image}" alt="reference" />
        <p>${reference.description}</p>
        </div></div>`;
          })
          .join("")
      );
    },
    getReferenceTitle(i) {
      if (i === "private") {
        return "Privé-omgeving";
      } else if (i === "b2b") {
        return "Zakelijke omgeving";
      } else if (i === "public") {
        return "Openbare omgeving";
      }
    },
  };
  app.initialize();
})();
