import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favorites from "./Pages/Favorites/Favorites";
import { BrowserRouter, Route, Routes } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/details/:id" />
        <Route element={<Details />} path="/details" />
        <Route element={<Favorites />} path="/favorites" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
