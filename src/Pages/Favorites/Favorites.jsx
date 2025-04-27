import React from "react";
import Button from "../../Components/Button/Button";
import { Navigate, useNavigate } from "react-router";

const Favorites = () => {
  const navegate = useNavigate();
  const navegaAHome = () => {
    navegate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1> Esta es la pagina de Favorites</h1>
      <Button text={"Volver a Home"} onClick={navegaAHome} />
    </div>
  );
};
export default Favorites;
