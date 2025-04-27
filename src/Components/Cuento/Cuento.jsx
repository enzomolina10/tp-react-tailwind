import { useEffect } from "react";
import Button from "../../Components/Button/Button";
import { Navigate, useNavigate } from "react-router";
const Cuento = () => {
	const navegate = useNavigate();
	const navegaAHome = () => {
		navegate("/");
	}


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

export default Cuento;
