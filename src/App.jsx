import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Mynetwork from './components/Mynetwork';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app_body">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='mynetwork' element={<Mynetwork />}></Route>
      </Routes>
      </div>
      
     
    </div>
  );
}

export default App;
