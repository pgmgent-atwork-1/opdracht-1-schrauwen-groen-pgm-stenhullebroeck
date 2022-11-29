(() => {
  const aanleg = services.filter((i) => {
    return i.type === "aanleg";
  });
  const onderhoud = services.filter((i) => {
    return i.type === "onderhoud";
  });

  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$services_aanleg = document.querySelector("#services--aanleg");
      this.$services_onderhoud = document.querySelector("#services--onderhoud");
    },
    buildUI() {
      if (this.$services_aanleg != null) {
        this.$services_aanleg.innerHTML = this.generateHTMLForServices(aanleg);
      }
      if (this.$services_onderhoud != null) {
        this.$services_onderhoud.innerHTML =
          this.generateHTMLForServices(onderhoud);
      }
    },
    generateHTMLForServices(element) {
      return element
        .map((service) => {
          return `<div class="service" id="${service.id}">
        <img src="${service.image}" alt="service picture" />
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        </div>`;
        })
        .join("");
    },
  };
  app.initialize();
})();
