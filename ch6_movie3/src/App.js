import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Pages/Home";
import Movies from "./Components/Pages/Movies";
import Celebirity from "./Components/Pages/Celebirity";
import Tv from "./Components/Pages/Tv";
import MovieDetail from "./Components/Pages/MovieDetail";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Movies" element={<Movies/>} />
          <Route path="/Tv" element={<Tv/>} />
          <Route path="/Celebirity" element={<Celebirity/>} />
          <Route path="/Movies/:MovieTitle" element={<MovieDetail/>} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
