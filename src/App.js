import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
