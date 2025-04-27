import { useEffect } from "react";
const Autor = () => {
  const getAutor = async () => {
    const autorRes = await fetch(
      "https://680e8d0167c5abddd192719b.mockapi.io/api/v1/autor"
    );
    const autorParsed = await autorRes.json();
    console.log(autorParsed);
  };

  useEffect(() => {
    getAutor();
  }, []);
};
export default Autor;
