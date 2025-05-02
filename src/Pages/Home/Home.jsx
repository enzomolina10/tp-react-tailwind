import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

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

  const { t } = useTranslation();


  const [cuentosFavoritos,setCuentosFavoritos]=useState([]);

  // Cargar cuentos desde LocalStorage
  useEffect(() => {
    const cuentosGuardados = localStorage.getItem("cuentosFavoritos");
    if (cuentosGuardados) {
      setCuentosFavoritos(JSON.parse(cuentosGuardados));
    } 
  }, []);

  const agregarCuentoFavorito = (cuentoFavSeleccionado) => {
    const yaExiste = cuentosFavoritos.some(
      (cuento) => cuento.id === cuentoFavSeleccionado.id
    );
  
    if (!yaExiste) {
      const nuevosFavoritos = [...cuentosFavoritos, cuentoFavSeleccionado];
      setCuentosFavoritos(nuevosFavoritos);
      localStorage.setItem("cuentosFavoritos", JSON.stringify(nuevosFavoritos));
  
      // para verificar que se cuardo
      console.log("Cuento agregado a favoritos:", cuentoFavSeleccionado);
      console.log("Nuevo array en localStorage:", nuevosFavoritos);
    } else {
      console.log("El cuento ya estaba en favoritos:", cuentoFavSeleccionado);
    }
  };

  return (
    <div>
      <Header />
      <div className="probarStickyHeader">
        <br />
        <p>hola</p>
        <Button
          onClick={() =>
            agregarCuentoFavorito({
              id: 1,
              nombre: "Tutancamon",
              autor: "Ramon",
            })
          }
          text="Agregar a Fav"
        />
        <br />
        <br />
        <p>hola</p>
        <Button
          onClick={() =>
            agregarCuentoFavorito({
              id: 2,
              nombre: "Transofmers",
              autor: "Eldiablo",
            })
          }
          text="Agregar a Fav"
        />
        <br />
        <p>hola</p>
        <Button
          onClick={() =>
            agregarCuentoFavorito({
              id: 3,
              nombre: "Fast y furioso",
              autor: "La familia",
            })
          }
          text="Agregar a Fav"
        />
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
        <br />
        <p>hola</p>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
