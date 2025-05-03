import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


import Button from "../../Components/Button/Button";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

function Home() {
  const { t } = useTranslation();
  const [cuentos, setCuentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const quitarAcentos = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const cuentosFiltrados = cuentos.filter((cuento) =>
    // cuento.titulo.toLowerCase().includes(busqueda.toLowerCase())
    quitarAcentos(cuento.titulo).includes(quitarAcentos(busqueda))
  );

  useEffect(() => {
    const obtenerCuentos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://680e8d0167c5abddd192719b.mockapi.io/api/v1/cuentos"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCuentos(data);
      } catch (err) {
        setError(err.message);
        console.error("Error al obtener cuentos:", err);
      } finally {
        setLoading(false);
      }
    };

    obtenerCuentos();
  }, []);

  const handleDetallesAutor = async (autorId) => {
    try {
      const response = await fetch(
        `https://680e8d0167c5abddd192719b.mockapi.io/api/v1/autor/${autorId}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const autorData = await response.json();
      console.log("Detalles del autor:", autorData);
    } catch (err) {
      console.error("Error al obtener detalles del autor:", err);
    }
  };

  const [cuentosFavoritos, setCuentosFavoritos] = useState([]);

  useEffect(() => {
    const favoritosEnStorage = localStorage.getItem("cuentosFavoritos");
  
    if (favoritosEnStorage) {
      try {
        const favoritosParseados = JSON.parse(favoritosEnStorage);
  
        const favoritosValidos = favoritosParseados.filter((cuento) =>
          cuento &&
          typeof cuento === "object" &&
          cuento.idCuento // aseguramos que tenga un id válido
        );
  
        setCuentosFavoritos(favoritosValidos);
      } catch (error) {
        console.error("Error al parsear los cuentos favoritos desde localStorage:", error);
        setCuentosFavoritos([]); // por seguridad, dejarlo vacío si hay error
      }
    }
  }, []);
  
  const agregarCuentoFavorito = (cuentoFavSeleccionado) => {
    const yaExiste = cuentosFavoritos.some(
      (cuento) => cuento.idCuento === cuentoFavSeleccionado.idCuento
    );

    if (!yaExiste) {
      const nuevosFavoritos = [...cuentosFavoritos, cuentoFavSeleccionado];
      setCuentosFavoritos(nuevosFavoritos);
      localStorage.setItem("cuentosFavoritos", JSON.stringify(nuevosFavoritos));

      // para verificar que se cuardo
      console.log("Cuento agregado a favoritos:");
      console.log("Nuevo array en localStorage:");
    } else {
      console.log("El cuento ya estaba en favoritos:");
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-2">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8"></h1>
        <Input onChange={(e) => setBusqueda(e.target.value)} />
        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && cuentos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-3xl text-red-600">{t("home.empty")}</p>
          </div>
        )}

      <div className="space-y-6">
        {cuentosFiltrados.map((cuento) => (
          <Card
            key={cuento.idCuento}
            title={cuento.titulo}
            text={cuento.cuento}
            onClick={() => agregarCuentoFavorito(cuento)}
            translation1="card.favorite"
            translation2="card.author"
          />
        ))}
      </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
