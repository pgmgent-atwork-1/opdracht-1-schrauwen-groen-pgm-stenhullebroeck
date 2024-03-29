(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$services = document.getElementById('services');
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
          return `
          <div class="service" id="${service.id}">
          <div>
        <img src="${service.image}" alt="service picture" />
        </div>
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <a href="#" class="button">Meer informatie</a>
        </div>
        `;
        })
        .join('');
    },
  };
  app.initialize();
})();
