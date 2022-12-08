(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$references = document.getElementById('references');
    },
    buildUI() {
      // this.$references.innerHTML += this.generateHTMLForFilteredReferences(
      //   this.getFilteredReferences('private')
      // );
      // this.$references.innerHTML += this.generateHTMLForFilteredReferences(
      //   this.getFilteredReferences('b2b')
      // );
      // this.$references.innerHTML += this.generateHTMLForFilteredReferences(
      //   this.getFilteredReferences('public')
      // );
      this.$references.innerHTML += this.generateHTMLForFilteredReferences(
        this.getFilteredReferences(REFERENCES)
      );
    },
    getFilteredReferences(ref) {
      return REFERENCES.filter((i) => {
        return i.type === ref;
      });
    },
    generateHTMLForFilteredReferences(element) {
      const types = [...new Set(REFERENCES.map((r) => r.type))];
      return types
        .map((type) => {
          console.log(type);
          return `
          <div class="cards-${type} reference-cards">
          <div class="centre">
          <h2 id=${type}>${this.getReferenceTitle(type)}</h2>
          
          <div class="cards">
            ${this.getFilteredReferences(type)
              .map((reference) => {
                return `<div class="card" id="${reference.id}">
            <img src="${reference.image}" alt="reference" />
            <p>${reference.description}</p>
            </div>
            `;
              })
              .join('')}
          </div>
          </div>
          </div>`;
        })
        .join('');
    },
    getReferenceTitle(i) {
      switch (i) {
        case 'private':
          return 'Privé-omgeving';
        case 'b2b':
          return 'Zakelijke omgeving';
        case 'public':
          return 'Openbare omgeving';
        default:
          return '';
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
