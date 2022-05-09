import { useState, createContext } from "react";

export const AddRatings = createContext();

export default function Ratings({ children }) {
  const [ratings, setRatings] = useState(0);

  const SetRate = (num) => {
    setRatings(num);
  };

  return (
    <AddRatings.Provider value={{ ratings, SetRate }}>
      {children}
    </AddRatings.Provider>
  );
}
