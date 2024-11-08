import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import User from "./User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route exect path="/" element={<Login/>}/>
              <Route exect path="/user" element={<User/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
