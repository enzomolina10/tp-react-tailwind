import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Card from "../../Components/Card/Card";

import NotificacionAlert from "../../Components/NotificacionAlert/NotificacionAlert";

const Favorites = () => {
  const { t } = useTranslation();
  const navegate = useNavigate();
  const navegaAHome = () => {
    navegate("/");
  };

  const [cuentosFavoritos, setCuentosFavoritos] = useState([]);

  const [notificacion, setNotificacion] = useState({
    visible: false,
    mensaje: "",
    tipo: "info",
  });

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

    setNotificacion({
      visible: true,
      mensaje: `"${favorito.titulo}" eliminado de favoritos`,
      tipo: "error",
    });
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
              onClickFav={() => eliminarFavorito(cuento)}
            />
          ))
        ) : (
          <h1>NO HAY FAVORITOS</h1>
        )}
      </div>
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="space-y-6">{mostrarFavoritos()}</div>

        <Button
          text="Limpiar favoritos"
          onClick={() => {
            localStorage.removeItem("cuentosFavoritos");
            setCuentosFavoritos([]);
          }}
        />
        <Button text={t("footer.comeBack")} onClick={navegaAHome} />
      </div>
      <Footer />
      <NotificacionAlert
        visible={notificacion.visible}
        mensaje={notificacion.mensaje}
        tipo={notificacion.tipo}
        onClose={() => setNotificacion({ ...notificacion, visible: false })}
      />
    </div>
  );
};

export default Favorites;
