import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RepoList from "./components/home";
import AboutUs from "./components/about";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<RepoList />} /> {/* RepoList is the Home component */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
