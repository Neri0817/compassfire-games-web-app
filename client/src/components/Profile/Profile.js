import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useGameContext } from "../../contexts/GameContext";
import { OwnedGames } from "./OwnedGames/OwnedGames";

export const Profile = () => {
  const { games } = useGameContext();
  const { userId } = useContext(AuthContext);

  const ownedGames = games.filter((game) => game._ownerId === userId);

  return (
    <section className="profile-section">
      <h1 className="profile-section-heading">My Profile</h1>
      <div className="profile-section-container">
        <h3 className="profile-section-container-heading">My Added Games</h3>
        <div className="gameshelf-section-games">
          {ownedGames.map((game) => (
            <OwnedGames key={game._id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};
