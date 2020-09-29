// this file is not currently being used

import axios from "axios";

const proPublicaSenateInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.propublica.org/congress/v1/116/senate/members.json',
  timeout: 9000,
  headers: {'X-API-Key': 'WV35s0Ddq7Kvq7wBbAhQXHuSFLU2tDDUYS4h7iae'}
});

const proPublicaHouseInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.propublica.org/congress/v1/116/house/members.json',
  timeout: 9000,
  headers: {'X-API-Key': 'WV35s0Ddq7Kvq7wBbAhQXHuSFLU2tDDUYS4h7iae'}
});
  // https://api.propublica.org/congress/v1/

  //https://api.propublica.org/congress/v1/{congress}/{chamber}/members.json
  export const searchSenateProPublica = () => proPublicaSenateInstance.get();
  export const searchHouseProPublica = () => proPublicaHouseInstance.get();
  export const getCurrentUser = () => axios.get("/api/userdata")