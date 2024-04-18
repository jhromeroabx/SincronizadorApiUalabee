const SqlConnection = require("../utils/sql");

class SincronizadorStore {
  #sql;

  constructor() {
    this.#sql = new SqlConnection();
  }

  async obtenerInformacion() {
    const result = await this.#sql
      .executeProcedure("ProcBusquedaUnidad", "", 2)
      .catch((err) => {
        return {
          isValid: false,
          content: err,
        };
      });
    console.log(result);

    return {
      isValid: true,
      content: result.recordsets,
    };
  }
}

module.exports = SincronizadorStore;
