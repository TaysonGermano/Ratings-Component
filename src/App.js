import RatingsCard from "./Components/RatingCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./Components/ThankYou";
import Ratings from "./Context/Ratings";

function App() {
  return (
    <Router>
      <Ratings>
        <Routes>
          <Route path="/" element={<RatingsCard />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </Ratings>
    </Router>
  );
}

export default App;
