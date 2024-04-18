const SincronizadorController = require("./src/sincronizador/controlador_sincronizador");

const sincronizador = new SincronizadorController();

// Ejecuta la consulta cada 60 segundos
setInterval(sincronizador.getTiempoEstimado, 60000);
