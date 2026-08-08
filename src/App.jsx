import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RiverDetails from "./pages/RiverDetails";
import DamDetails from "./pages/DamDetails";
import Prediction from "./pages/Prediction";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/river/:id" element={<RiverDetails />} />

        <Route path="/dam/:id" element={<DamDetails />} />

        <Route path="/prediction" element={<Prediction />} />

        <Route path="/alerts" element={<Alerts />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;