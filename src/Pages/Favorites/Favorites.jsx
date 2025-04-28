import React from "react";
import Button from "../../Components/Button/Button";
import { Navigate, useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Favorites = () => {
  const navegate = useNavigate();
  const navegaAHome = () => {
    navegate("/");
  };
  return (
    <div>
      <Header />
      <h1> Esta es la pagina de Favorites</h1>
      <Button text={"Volver a Home"} onClick={navegaAHome} />
      <Footer />
    </div>
  );
};
export default Favorites;
