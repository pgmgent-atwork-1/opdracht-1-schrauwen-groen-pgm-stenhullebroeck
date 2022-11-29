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
        `${this.getReferenceTitle(this.findType(element))}` +
        element
          .map((reference) => {
            return `<div class="reference-filtered" id="${reference.id}">
        <img src="${reference.image}" alt="reference" />
        <p>${reference.description}</p>
        </div>`;
          })
          .join("")
      );
    },
    getReferenceTitle(i) {
      if (i === "private") {
        return `<h2 id="${i}">Privé-omgeving</h2>`;
      } else if (i === "b2b") {
        return `<h2 id="${i}">Zakelijke omgeving</h2>`;
      } else {
        return `<h2 id="${i}">Openbare omgeving</h2>`;
      }
    },
    findType(f) {
      const temp = f.find((r) => {
        return r.type;
      });
      return temp.type;
    },
  };
  app.initialize();
})();
