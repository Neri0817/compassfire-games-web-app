import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAllGames = async () => {
  const response = await request.get(baseUrl);
  const games = Object.values(response);

  return games;
};

export const addGame = async (gameData) => {
  const result = await request.post(baseUrl, gameData);
  return result;
};
