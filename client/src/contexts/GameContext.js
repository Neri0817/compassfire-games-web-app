import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gameServiceFactory } from "../services/gameService";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory();

  useEffect(() => {
    gameService.getAll().then((games) => setGames(games));
  }, [gameService]);

  const onAddGameSubmit = async (data) => {
    const addedGame = await gameService.addGame(data);

    setGames((games) => [...games, addedGame]);

    navigate("/gameshelf");
  };

  const onGameEditSubmit = async (values) => {
    const result = await gameService.editGame(values._id, values);

    setGames((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/gameshelf/${values._id}`);
  };

  const contextData = {
    games,
    onAddGameSubmit,
    onGameEditSubmit,
  };

  return (
    <GameContext.Provider value={contextData}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  return context;
};
