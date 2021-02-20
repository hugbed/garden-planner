import Fetch from "./Fetch";

class PlantsAPI {
  static async fetchAll() {
    return await Fetch.get("/plants");
  }
}

export default PlantsAPI;
