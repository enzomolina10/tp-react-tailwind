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
  const navigate = useNavigate();
  const navegaAHome = () => {
    navigate("/");
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
      mensaje: `"${t(favorito.titulo)}" eliminado de favoritos`,
      tipo: "error",
    });
  };

  const handleDetallesAutor = (idAutor) => {
    navigate(`/details/${idAutor}`);
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
              image={cuento.imagen}
              translation1="card.eliminate"
              translation2="card.author"
              onClickFav={() => eliminarFavorito(cuento)}
              onDetails={() => handleDetallesAutor(cuento.idAutor)}
            />
          ))
        ) : (
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-400 py-10">
            {t("favorites.empty")}
          </h1>
        )}
      </div>
    );
  };

  return (
       <div className="bg-gradient-to-r from-white to-blue-200 dark:bg-gradient-to-r dark:from-black dark:to-blue-900 min-h-screen flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <div className="space-y-6">{mostrarFavoritos()}</div>
        <div className="flex justify-center mt-6">
          <Button
            className="bg-gray-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-200"
            text={t("favorites.cleanFavorite")}
            onClick={() => {
              localStorage.removeItem("cuentosFavoritos");
              setCuentosFavoritos([]);
            }}
          />
        </div>
        <div className="flex justify-center mt-6">
          <Button
            text={t("footer.comeBack")}
            onClick={navegaAHome}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 mb-6 rounded-md transition duration-200"
          />
        </div>
      </div>
      <NotificacionAlert
        visible={notificacion.visible}
        mensaje={notificacion.mensaje}
        tipo={notificacion.tipo}
        onClose={() => setNotificacion({ ...notificacion, visible: false })}
      />
      <Footer />
    </div>
  );
};

export default Favorites;
