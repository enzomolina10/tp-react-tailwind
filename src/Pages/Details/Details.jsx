import React from "react";
import Button from "../../Components/Button/Button";
import { Navigate, useNavigate } from "react-router";

const Details = () => {
  const navigate = useNavigate();
  const navegaAHome = () => {
    navigate("/");
  };
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1> Esta es la pagina de details</h1>
      <Button text={"Volver a Home"} onClick={navegaAHome} />
    </div>
  );
};
export default Details;
