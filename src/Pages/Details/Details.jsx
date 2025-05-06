import React, { useState, useEffect } from "react";
import Button from "../../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";
import Card from "../../Components/Card/Card";

const Details = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [autores, setAutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navegaAHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const getAutores = async () => {
      try {
        setLoading(true);
        if (id) {
          const response = await fetch(
            `https://680e8d0167c5abddd192719b.mockapi.io/api/v1/autor/${id}`
          );

          if (!response.ok) {
            throw new Error(
              `Error ${response.status}: No se pudo obtener el autor con ID ${id}`
            );
          }

          const autorData = await response.json();
          const autorTraducible = {
            ...autorData,
            nombreAutor: `autor.${autorData.id}.name`,
            apellidoAutor: `autor.${autorData.id}.lastName`,
            biografia: `autor.${autorData.id}.biography`,
            nacionalidad: `autor.${autorData.id}.nationality`,
          };

          setAutores([autorTraducible]);
        } else {
          const autoresRes = await fetch(
            "https://680e8d0167c5abddd192719b.mockapi.io/api/v1/autor"
          );

          if (!autoresRes.ok) {
            throw new Error(
              `Error ${autoresRes.status}: No se pudo obtener datos de los autores`
            );
          }

          const autoresParsed = await autoresRes.json();
          const autoresTraducibles = autoresParsed.map((autor) => ({
            ...autor,
            nombreAutor: `autor.${autor.id}.name`,
            apellidoAutor: `autor.${autor.id}.lastName`,
            biografia: `autor.${autor.id}.biography`,
            nacionalidad: `autor.${autor.id}.nationality`,
          }));

          setAutores(autoresTraducibles);
        }
      } catch (err) {
        console.error("Error al obtener datos de los autores:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAutores();
  }, [id]);

  const formatearAutorTextNegrita = (autor) => {
    return (
      <>
        <p className="mb-3">
          <span className="font-bold">{t("details.biography")}:</span>{" "}
          {t(autor.biografia)}
        </p>

        <p className="mb-3">
          <span className="font-bold">{t("details.age")}:</span>{" "}
          {autor.edad || t("details.noAge")}
        </p>

        <p className="mb-3">
          <span className="font-bold">{t("details.nationality")}:</span>{" "}
          {t(autor.nacionalidad)}
        </p>
      </>
    );
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {id
            ? t("details.title", "Detalles del Autor")
            : t("header.authors", "Autores")}
        </h1>

        {loading && (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        {!loading && !error && autores.length === 0 && (
          <div className="text-center py-8 text-2xl text-red-700">
            {t("details.noAuthors")}
          </div>
        )}

        {!loading && !error && autores.length > 0 && (
          <div
            className={`grid grid-cols-1 ${id ? "" : "md:grid-cols-2"} gap-8`}
          >
            {autores.map((autor) => (
              <div
                key={autor.id}
                className={id ? "mx-auto max-w-2xl w-full" : ""}
              >
                <Card
                  title={`${t(autor.nombreAutor)} ${t(autor.apellidoAutor)}`}
                  text={formatearAutorTextNegrita(autor)}
                  className="mb-8 h-full"
                  hideButtons={true}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <Button
            text={t("footer.comeBack")}
            onClick={navegaAHome}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition duration-200"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Details;
