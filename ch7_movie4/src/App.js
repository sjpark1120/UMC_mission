import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Movies from "./Components/Pages/Movies";
import Celebirity from "./Components/Pages/Celebirity";
import Tv from "./Components/Pages/Tv";
import ContentDetail from "./Components/Pages/ContentDetail";
import NotFound from "./Components/Pages/NotFound";
import LoginPage from "./Components/Pages/LoginPage";
import { useState } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Tv" element={<Tv/>} />
          <Route path="/Celebirity" element={<Celebirity/>} />
          <Route path="/Login" element={<LoginPage isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>} />
          <Route path="/Movies/:MovieTitle" element={<ContentDetail/>} />
          <Route path="/Tv/:TvTitle" element={<ContentDetail/>} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
