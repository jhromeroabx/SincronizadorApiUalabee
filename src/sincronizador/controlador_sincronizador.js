const SincronizadorStore = require("./modelo_sincronizador");

class SincronizadorController {
    #store;

    constructor() {
        this.getTiempoEstimado = this.getTiempoEstimado.bind(this);
        this.#store = new SincronizadorStore();
    }

    async getTiempoEstimado() {
        const response = await this.#store
            .obtenerInformacion()
            .catch((error) => error);

        console.log("testttt");

        return response;
    }
}

module.exports = SincronizadorController;
