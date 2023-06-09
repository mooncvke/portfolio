import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import TraditionalPage from "./pages/TraditionalPage";
import DigitalPage from "./pages/DigitalPage";
import PhotographyPage from "./pages/PhotographyPage";
import Header from "./components/Header";
import UploadPage from "./pages/UploadPage";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/traditional" element={<TraditionalPage />} />
        <Route path="/digital" element={<DigitalPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
