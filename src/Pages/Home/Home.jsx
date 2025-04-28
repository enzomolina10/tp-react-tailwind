import React from "react";
import {  useEffect } from "react";

import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";

function Home() {
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
    <div>
      <Header />
      {/* <div className="probarStickyHeader">
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br />
        <p>hola</p>
        <br />
        <br /><p>hola</p><br />
        <br />
      </div> */}
    </div>
  );
}

export default Home;