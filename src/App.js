import { Route, Routes} from "react-router-dom"
// Components
import Nav from "./components/Nav";
// Pages
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
