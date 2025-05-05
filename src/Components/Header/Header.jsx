import { useNavigate } from "react-router";
// import { useState } from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();

  const navegaADetails = () => {
    navigate("/details");
  };

  const navegaAFavorites = () => {
    navigate("/favorites");
  };

  const navegaAHome = () => {
    navigate("/");
  };

  const { t, i18n } = useTranslation();

  const cambiarIdioma = (leng) => {
    i18n.changeLanguage(leng);
    localStorage.setItem("lng", leng);
  };

  return (
    <header
      className={
        "bg-gradient-to-r from-blue-600 to-blue-500 py-5 sticky top-0 z-50 text-white"
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div
              className="bg-white text-blue-600 rounded-full p-2 shadow-md cursor-pointer hover:bg-blue-100 transition-colors duration-200"
              onClick={navegaAHome}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span
              className={
                "text-2xl font-bold cursor-pointer tracking-wide transition-all duration-300"
              }
              onClick={navegaAHome}
            >
              {t("header.name")}
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Button
              onClick={navegaAHome}
              text={<span>{t("header.home")}</span>}
              className="group relative py-2 px-5 font-semibold text-base bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 hover:underline"
            />
            <Button
              onClick={navegaAFavorites}
              text={<span>{t("header.favorites")}</span>}
              className="group relative py-2 px-5 font-semibold text-base bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 hover:underline"
            />
            <Button
              onClick={navegaADetails}
              text={<span>{t("header.authors")}</span>}
              className="group relative py-2 px-5 font-semibold text-base bg-blue-100 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 hover:underline"
            />
            <div
              onClick={() =>
                cambiarIdioma(i18n.language === "es" ? "en" : "es")
              }
              className="flex items-center cursor-pointer select-none px-4 py-2 ml-4 rounded-xl bg-white border border-blue-300 shadow-md hover:bg-blue-50 transition-colors duration-200"
            >
              {/* icono del mundo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9zm0 0v18"
                />
              </svg>
              {/* Mostrar ES o EN dinámicamente */}
              <span className="text-blue-700 font-bold text-base uppercase">
                {i18n.language === "es" ? "ES" : "EN"}
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
