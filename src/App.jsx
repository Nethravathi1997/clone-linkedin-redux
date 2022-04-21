import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import Mynetwork from "./components/Mynetwork"
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="mynetwork" element={<Mynetwork />}></Route>
          <Route path="jobs" element={<Jobs />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
