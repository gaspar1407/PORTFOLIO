import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeEn from "./components/HomeEn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/HomeEn"} element={<HomeEn />} />
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
