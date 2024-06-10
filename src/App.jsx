import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import Home from "./page/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
