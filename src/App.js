import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <div className="square1" style={{ top: "10%", left: "-8rem" }}></div>
      <div className="square2" style={{ top: "10%", left: "-25rem" }}></div>
      <div className="square3" style={{ top: "10%", left: "-35rem" }}></div>
      <div className="square1" style={{ top: "8%", right: "-57rem" }}></div>
      <div className="square2" style={{ top: "0%", right: "-66rem" }}></div>
      <div className="square3" style={{ top: "0%", right: "-80rem" }}></div>
      {/* <Login/> */}
      {/* <Dashboard/> */}
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
