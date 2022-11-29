(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$services = document.getElementById("services");
    },
    buildUI() {
      this.$services.innerHTML = this.generateHTMLForServices(
        this.getFilteredServices(this.$services.dataset.type)
      );
    },
    getFilteredServices(serv) {
      return services.filter((i) => {
        return i.type === serv;
      });
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
