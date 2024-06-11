import "./App.css";

import { Route, Routes } from "react-router-dom";

import AllUsers from "./pages/all-users/AllUsers";
import CreateUser from "./pages/create-user/CreateUser";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/all-users" element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default App;
