const SqlConnection = require("../utils/sql");
// require('../utils/config').dbConnection();
const MongoController = require("../controlador_mongo/mongo_controller");

class SincronizadorStore {
  #sql;
  #mongo;

  constructor() {
    this.#sql = new SqlConnection();
    this.#mongo = new MongoController();
  }

  async obtenerInformacion() {



    const result = await this.#sql
      .executeProcedure("ProcObtenerDatoPosteo", "", 10, 25)
      .catch((err) => {
        return {
          isValid: false,
          content: err,
        };
      });
    console.log(result);

    const response_mongo = await this.#mongo.grabarPosteo(JSON.parse(result.recordsets[0]));
    if (response_mongo) {

    } else {

    }

    return {
      isValid: true,
      content: result.recordsets,
    };
  }
}

module.exports = SincronizadorStore;
