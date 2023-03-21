import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GameShelf } from "./components/GameShelf/GameShelf";
import { AddGame } from "./components/AddGame/AddGame";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { useEffect, useState } from "react";
import * as gameService from "./services/gameService";

const baseUrl = "http://localhost:3030/data/games";

function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setGames(Object.values(data));
      });
  }, []);

  const onAddGameSubmit = async (data) => {
    const addedGame = await gameService.addGame(data);

    setGames((games) => [...games, addedGame]);

    navigate("/gameshelf");
  };

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameshelf" element={<GameShelf games={games} />} />
          <Route path="/gameshelf/:gameId" element={<GameDetails />} />
          <Route
            path="/addgame"
            element={<AddGame onAddGameSubmit={onAddGameSubmit} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
