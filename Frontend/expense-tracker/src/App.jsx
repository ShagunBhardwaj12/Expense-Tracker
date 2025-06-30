import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/expense" element={<Expense/>}/>
          <Route path="/income" element={<Income/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (<Navigate to="/home" />) : (<Navigate to="/login" />) ;
};
