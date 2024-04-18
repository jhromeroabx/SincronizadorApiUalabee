const generateSqlConfig = require("./sql_config");
const sql = require("mssql");

class SqlConnection {
  constructor() {}

  async #connect(codEmpresa) {
    try {
      const nomDB = this.#getNameDatabase(codEmpresa);
      await sql.connect(generateSqlConfig(nomDB)); // TODO: nomDB  "AGPS_Rapido"
      // console.log("Conectado correctamente a la base de datos");
    } catch (err) {
      console.log("Ocurrio un error: ", err.message);
    }
  }

  async executeProcedure(procedure, parameters, index, codEmpresa) {
    await this.#connect(codEmpresa);

    return new Promise((resolve, reject) => {
      const request = new sql.Request();
      request.input("Parametros", sql.VarChar(), parameters);
      request.input("Indice", sql.Int, index);
      request.execute(procedure, (err, result) => {
        if (err) {
          sql.close();
          reject(err);
        }
        // console.log(result.recordsets.length); // count of recordsets returned by the procedure
        // console.log(result.recordsets[0].length); // count of rows contained in first recordset
        // console.log(result.recordset); // first recordset from result.recordsets
        // console.log(result.returnValue); // procedure return value
        // console.log(result.output); // key/value collection of output values
        // console.log(result.rowsAffected); // array of numbers, each number represents the number of rows affected by executed statemens
        sql.close();
        resolve(result);
      });
    });
  }
  #getNameDatabase(codEmpresa) {
    const databases = {
      3: "TGPS2012",
      5: "AGPS_TRANSLICSA",
      6: "AGPS_Etul4",
      8: "AGPS_StaCatalina",
      11: "AGPS_SJL",
      14: "AGPS_Rapido",
      15: "AGPS_Chama",
      16: "AGPS_Salamanca",
      20: "AGPS_Lipetsa",
      22: "AGPS_LimaSur",
      25: "AGPS_Pruebas",
      26: "AGPS_Alfa",
      28: "AGPS_Modasa",
      30: "AGPS_CaminoInca",
      32: "AGPS_Etupsa",
      34: "AGPS_AqpTS",
      37: "AGPS_RAmerica",
      38: "AGPS_TATSA",
      39: "AGPS_Vigusa",
      42: "AGPS_Vipusa",
      43: "AGPS_Salvador",
      44: "AGPS_SantoCristo",
      45: "AGPS_SolOro",
      46: "AGPS_UAT",
      47: "AGPS_TransTigrillo",
      48: "AGPS_SanJose",
      49: "AGPS_JLLogistica",
      51: "AGPS_GTI",
      52: "AGPS_GTI_DES",
      53: "AGPS_ChalacosUnidos",
      54: "AGPS_ETVPSA",
      55: "AGPS_VIPUSA_8109",
      56: "AGPS_PeruBus",
      57: "AGPS_ETS104",
      58: "TeGuio"
    };

    return databases[codEmpresa];
  }
}

module.exports = SqlConnection;