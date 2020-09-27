// this file is not currently being used

import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/users");
  }
}