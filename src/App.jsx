import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favorites from "./Pages/Favorites/Favorites";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/Details" />
        <Route element={<Favorites />} path="/Favorites" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
