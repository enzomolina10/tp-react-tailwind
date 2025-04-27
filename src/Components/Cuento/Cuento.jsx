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
	
	return (
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1> Esta es la pagina de Cuentos</h1>
      <Button text={"Volver a Home"} onClick={navegaAHome} />
    </div>
  );
};

export default Cuento;
