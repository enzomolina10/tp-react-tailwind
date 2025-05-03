import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Card from "../../Components/Card/Card";

const Favorites = () => {
  const { t } = useTranslation();
  const navegate = useNavigate();
  const navegaAHome = () => {
    navegate("/");
  };

  const [cuentosFavoritos, setCuentosFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = localStorage.getItem("cuentosFavoritos");
    if (favoritosGuardados) {
      setCuentosFavoritos(JSON.parse(favoritosGuardados));
    }
  }, []);


  const eliminarFavorito = (favorito) => {
    const nuevosFavoritos = cuentosFavoritos.filter(
      (cuento) => cuento.idCuento !== favorito.idCuento 
    );
    setCuentosFavoritos(nuevosFavoritos);
    localStorage.setItem("cuentosFavoritos", JSON.stringify(nuevosFavoritos));
  };

  const mostrarFavoritos = () => {
    return (
      <div>
        {cuentosFavoritos.length > 0 ? (
          cuentosFavoritos.map((cuento) => (
            <Card
              key={cuento.idCuento}
              title={cuento.titulo}
              text={cuento.cuento}
              translation1="card.eliminate"
              translation2="card.author"
              onClick={() => eliminarFavorito(cuento)}
            />
          ))
        ) : (
          <h1>NO HAY FAVORITOS</h1>
        )}
      </div>
    );
  };
  
  
  
  
  return (
    <div>
      <Header />
      <h1>Esta es la página de Favorites</h1>

      <div className="space-y-6">
       {mostrarFavoritos()}
      </div>


      <Button
        text="Limpiar favoritos"
        onClick={() => {
          localStorage.removeItem("cuentosFavoritos");
          setCuentosFavoritos([]);
        }}
      />
      <Button text={t("footer.comeBack")} onClick={navegaAHome} />
      <Footer />
    </div>
  );
};

export default Favorites;

