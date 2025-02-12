import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageBaseball from "./pages/PageBaseball";
import PageHeap from "./pages/PageHeap";
import PageEQ from "./pages/PageEQ";
import Skillsets from "./components/PageSpecific/PageSkillSet/SkillSet";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="page2" element={<PageBaseball />} />
          <Route path="page3" element={<PageHeap />} />
          <Route path="page4" element={<PageEQ />} />
          <Route path="skillsets" element={<Skillsets />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
