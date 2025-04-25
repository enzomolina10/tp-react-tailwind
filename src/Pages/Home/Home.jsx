import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
function Home() {
  const navigate = useNavigate();
  const navegaADetails = () => {
    navigate("/details");
  };
  const navegaAFavorites = () => {
    navigate("/favorites");
  };
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1> Esta es la pagina de Home</h1>
      <Button text={"Pagina a details"} onClick={navegaADetails} />
      <Button text={"Pagina a favorites"} onClick={navegaAFavorites} />
    </div>
  );
}

export default Home;
