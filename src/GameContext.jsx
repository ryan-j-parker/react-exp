import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, setGame] = useState(currentGame);

  return <GameContext.Provider value={{ game, setGame }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };
