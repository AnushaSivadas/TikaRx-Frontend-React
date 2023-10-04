import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <div className="square1" style={{left:"-280px"}} ></div>
      <div className="square1" style={{right:"-280px"}} ></div>
      <div className="square2" style={{left:"-500px"}} ></div>
      <div className="square2" style={{right:"-500px"}} ></div>
      <div className="square3" style={{left:"-690px"}} ></div>
      <div className="square3" style={{right:"-690px"}} ></div>
      <Routes>
        <Route
          path="/"
          element={<Login/>}
        />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
        </Routes>
    </div>
  );
}

export default App;
