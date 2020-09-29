// this file is not currently being used

import axios from "axios";

const proPublicaInstance = axios.create({
  baseURL: 'https://api.propublica.org/congress/v1/116/senate/members.json',
  timeout: 3000,
  headers: {'X-API-Key': 'WV35s0Ddq7Kvq7wBbAhQXHuSFLU2tDDUYS4h7iae'}
});


  // https://api.propublica.org/congress/v1/

  //https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json
  export const searchProPublica = () =>  proPublicaInstance.get();
  export const getCurrentUser = () => axios.get("/api/userdata")