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

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { gameServiceFactory } from "./services/gameService";
import { AuthProvider } from "./contexts/AuthContext";
import { Logout } from "./components/Logout/Logout";
import { EditGame } from "./components/EditGame/EditGame";

const baseUrl = "http://localhost:3030/data/games";

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const gameService = gameServiceFactory(); //auth.accessToken

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

  const onGameEditSubmit = async (values) => {
    const result = await gameService.editGame(values._id, values);

    setGames((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/gameshelf/${values._id}`);
  };

  return (
    <AuthProvider>
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
          <Route
            path="/gameshelf/:gameId/edit"
            element={<EditGame onGameEditSubmit={onGameEditSubmit} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>

      <Footer />
    </AuthProvider>
  );
}

export default App;
