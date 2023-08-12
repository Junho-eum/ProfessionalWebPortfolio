import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page1 from "./pages/HomePage";
import Page2 from "./pages/PageTwo";
import Page3 from "./pages/PageThree";
import Page4 from "./pages/PageFour";
import ArticlePage from "./pages/ArticlePage"; // Import ArticlePage
import Skillsets from "./components/SkillSet";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="page2" element={<Page4 />} />
          <Route path="page3" element={<Page2 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="article" element={<ArticlePage />} /> {/* New route */}
          <Route path="skillsets" element={<Skillsets />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
