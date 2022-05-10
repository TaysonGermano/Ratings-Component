import { useState, createContext } from "react";

export const AddRatings = createContext();

export default function Ratings({ children }) {
  const [ratings, setRatings] = useState(0);
  const [active, setActive] = useState({});

  const SetRate = (num) => {
    setRatings(num);
    setActive({ [num]: true });
  };

  return (
    <AddRatings.Provider value={{ ratings, SetRate, active }}>
      {children}
    </AddRatings.Provider>
  );
}
