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
import { Logout } from "./components/Logout/Logout";
import { EditGame } from "./components/EditGame/EditGame";

import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { GameProvider } from "./contexts/GameContext";
import { RouteGuard } from "./components/common/RouteGuard";
import { MyFavourites } from "./components/Favourites/Favourites";
import { FavoritesProvider } from "./contexts/FavouritesContext";

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <FavoritesProvider>
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gameshelf" element={<GameShelf />} />
              <Route path="/gameshelf/:gameId" element={<GameDetails />} />

              <Route element={<RouteGuard />}>
                <Route path="/gameshelf/:gameId/edit" element={<EditGame />} />
                <Route path="/addgame" element={<AddGame />} />
                <Route path="/myfavourites" element={<MyFavourites />} />
                <Route path="/logout" element={<Logout />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          <Footer />
        </FavoritesProvider>
      </GameProvider>
    </AuthProvider>
  );
}
export default App;
