const SincronizadorController = require("./src/sincronizador/controlador_sincronizador");

const sincronizador = new SincronizadorController();

// Ejecuta la consulta cada 60 segundos
console.log("testttt");
setInterval(sincronizador.getTiempoEstimado, 1000);
