import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./User";
import NewBooks from "./NewBooks";
import OldBooks from "./OldBooks";
import Login from "./Login";
import Daseboard from "./Daseboard";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <br></br>
          <li>
            <Link to="about">About</Link>
          </li>
          <br></br>
          <li>
            {" "}
            <Link to={"contact"}>Contact</Link>
          </li>
          <br></br>
          <li>
            <Link to={"user/1"}>User 1</Link>
          </li>
          <br></br>
          <li>
            <Link to={"user/2"}>User 2</Link>
          </li>
          <br></br>
          <li>
            <Link to={"user/3"}>User 3</Link>
          </li>
          <br></br>
          {/*             
          /********************Nested Routes**************************  */}
          <li>
            {" "}
            <Link to={"Books/Newbooks"}>New Books</Link>
          </li>
          <br></br>
          <li>
            <Link to={"Books/Oldbooks"}>Old Books</Link>
          </li>
          <br></br>

          {/* *****************Navigation Routes************* */}
          <Link to={"login"}>Login</Link>
          
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/user/:id" element={<User />}></Route>

          {/* 
          /********************Nested Routes**************************  */}

          <Route path="Books">
            <Route path="newbooks" element={<NewBooks />}></Route>
            <Route path="oldbooks" element={<OldBooks />}></Route>
          </Route>
          {/* ******************Navigation Routes********************************* */}
          <Route path="login" element={<Login />}></Route>
          <Route path="/daseboard" element={<Daseboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
