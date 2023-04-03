import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };

  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item._id !== itemId)
    );
  };

  const isFav = (itemId) => {
    return favorites.some((item) => item._id === itemId);
  };

  const favoritesData = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFav,
  };

  return (
    <FavoritesContext.Provider value={favoritesData}>
      {children}
    </FavoritesContext.Provider>
  );
};
