import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";  
function Home() {
  const navigate = useNavigate();
  const navegaADetails = () => {
    navigate("/details");
  };
  const navegaAFavorites = () => {
    navigate("/favorites");
  };


  const Autor = () => {
    const getAutor = async () => {
      const autorRes = await fetch(
        "https://680e8d0167c5abddd192719b.mockapi.io/api/v1/autor"
      );
      const autorParsed = await autorRes.json();
      console.log(autorParsed);
    };

    useEffect(() => {
      getAutor();
    }, []);
  };

const Cuento = () => {
  const getCuento = async () => {
    const cuentoRes = await fetch(
      "https://680e8d0167c5abddd192719b.mockapi.io/api/v1/cuentos"
    );
    const cuentoParsed = await cuentoRes.json();
    console.log(cuentoParsed);
  };
  useEffect(() => {
    getCuento();
  }, []);
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1> Esta es la pagina de Home</h1>
      <Button text={"Pagina a details"} onClick={navegaADetails} />
      <Button text={"Pagina a favorites"} onClick={navegaAFavorites} />
      <Card/>
    </div>
  );
}

export default Home;
