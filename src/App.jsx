import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import {Login} from './components/Login'
import Mynetwork from "./components/Mynetwork"
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import { AddJobs } from "./components/AddJobs";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header />

     
    </div>
  );
}

export default App;
