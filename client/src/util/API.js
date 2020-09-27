// this file is not currently being used because it seems... not useful
// easier to directly write the axios routes than create extra variables and functions

import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/users");
  }
}