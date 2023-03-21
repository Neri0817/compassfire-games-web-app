import * as request from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const getAllGames = async () => {
  const response = await request.get(baseUrl);
  const games = Object.values(response);

  return games;
};

export const addGame = async (gameData) => {
  const result = await request.post(baseUrl, gameData);
  return result;
};

export const editGame = (gameId, data) =>
  request.put(`${baseUrl}/${gameId}`, data);

export const deleteGame = (gameId) => request.delete(`${baseUrl}/${gameId}`);

export const addComment = async (gameId, data) => {
  const result = await request.post(`${baseUrl}/${gameId}/comments`, data);

  return result;
};
