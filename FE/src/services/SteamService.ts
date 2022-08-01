import axios, { AxiosInstance } from "axios";
import request from "./AxiosWrapper";

const steamClient = axios.create({
  baseURL: process.env.REACT_APP_STEAM_URL,
});

function getAllGamesByUserID( userID:string) {
  return request(
    steamClient,
    {
      // url: `/IPlayerService/GetOwnedGames/v0001/?key=${process.env.REACT_APP_STEAM_API_KEY}&steamid=${userID}&include_appinfo=true&format=json`,
      url: `/steam?userID=${userID}`,
      method: "GET",
    }
  );
}


const SteamService = {
  getAllGamesByUserID,
  
};

export default SteamService;