import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import TraditionalPage from "./pages/TraditionalPage";
import DigitalPage from "./pages/DigitalPage";
import PhotographyPage from "./pages/PhotographyPage";
import Header from "./components/Header";

import "./css/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/traditional" element={<TraditionalPage />} />
        <Route path="/digital" element={<DigitalPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
