import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gameshelf" element={<GameShelf />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* details page */}
          <Route path="/gamedetails" element={<GameDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
