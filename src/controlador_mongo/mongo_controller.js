const Posteo = require('../models/posteo');

class MongoController {

  constructor() {
  }

  async grabarPosteo(payload) {
    /*
    payload: {
        speed: 3.1,
        bearing: 356,
        latitude: -31.42004,
        longitude: -64.19002,
        route_id: 4,
        timestamp: 1689887928,
        start_time: 1689887475,
        vehicle_id: "408-27",
        direction_id: 1,
        agency_id: 408
    }
    */
    try {
        const posteo = new Posteo(payload);
        await posteo.save();
        return true;
    } catch (error) {
        return false;
    }
  }
}

module.exports = MongoController;
