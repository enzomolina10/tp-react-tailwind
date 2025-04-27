import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favorites from "./Pages/Favorites/Favorites";
import Cuento from "./Components/Cuento/Cuento";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/Details" />
        <Route element={<Favorites />} path="/Favorites" />
        <Route element={<Cuento />} path="/Cuento" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
