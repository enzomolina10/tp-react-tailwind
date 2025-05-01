import React from "react";
import Button from "../../Components/Button/Button";
import { Navigate, useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navegaAHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <h1> Esta es la pagina de details</h1>
      <Button text={t("footer.comeBack")} onClick={navegaAHome} />
      <Footer />
    </div>
  );
};
export default Details;
