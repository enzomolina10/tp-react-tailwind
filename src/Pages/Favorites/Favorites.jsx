import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";

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

  return (
    <div>
      <Header />
      <h1>Esta es la página de Favorites</h1>

      {cuentosFavoritos.length === 0 ? (
        <p>No hay cuentos en favoritos.</p>
      ) : (
        <div>
          {cuentosFavoritos.map((cuento) => (
            <div key={cuento.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{cuento.nombre}</h3>
              <p>{cuento.autor}</p>
            </div>
          ))}
        </div>
      )}
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

