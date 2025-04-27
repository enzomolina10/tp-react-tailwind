import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import Chat from "../../Components/Chat/Chat";
import { generateText } from "../../services/geminiService";
import Autor from "../../Components/Autor/Autor";
import Cuento from "../../Components/Cuento/Cuento";
function Home() {
  const navigate = useNavigate();

  // Estado para almacenar la respuesta de Gemini
  const [respuesta, setRespuesta] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  // Estado para almacenar lo que escribe el usuario
  const [inputDelUsuario, setInputDelUsuario] = useState("");

  const navegaADetails = () => {
    navigate("/details");
  };

  const navegaAFavorites = () => {
    navigate("/favorites");
  };
  const navegaACuento = () => {
    navigate("/Cuento");
  };

  // Funcion para manejar los cambios en el input
  const manejarCambioInput = (e) => {
    setInputDelUsuario(e.target.value);
  };

  const generarTextoConGemini = async () => {
    setCargando(true);
    setError(null);

    try {
      // Definimos la longitud del cuento segun si hay texto en el input
      const numeroDeParrafos = inputDelUsuario.trim() === "" ? 2 : 4;

      // Construimos el prompt segun el contenido del input
      let prompt;
      if (inputDelUsuario.trim() === "") {
        prompt = `Escribe un cuento corto de ${numeroDeParrafos} parrafos sobre como la inteligencia artificial va a dominar el mundo.`;
      } else {
        prompt = `Escribe un cuento de ${numeroDeParrafos} parrafos sobre ${inputDelUsuario}.`;
      }

      const resultado = await generateText(prompt);
      setRespuesta(resultado);
    } catch (err) {
      console.error("Error al generar texto:", err);
      setError("No se pudo generar el texto. Verifica tu API KEY.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Pagina de Inicio
      </h1>

      <div className="flex gap-4 mb-6 w-full max-w-lg">
        <Button
          text={"Ir a favoritos"}
          onClick={navegaAFavorites}
          className="px-4 py-2 bg-green-100 text-gray-800 rounded hover:bg-green-200 transition-colors"
        />
        <Button
          text={"Ir a detalles"}
          onClick={navegaADetails}
          className="px-4 py-2 bg-green-100 text-gray-800 rounded hover:bg-green-200 transition-colors"
        />
        <Button
          text={"Ir a cuentos"}
          onClick={navegaACuento}
          className="px-4 py-2 bg-green-100 text-gray-800 rounded hover:bg-green-200 transition-colors"
        />
      </div>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Generador Magico de Cuentos
        </h2>

        {/* Campo de entrada para el usuario  */}
        <div className="mb-4">
          <label
            htmlFor="userInput"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ¿Sobre que tema quieres un cuento? (deja vacio para un cuento de IA)
          </label>
          <input
            type="text"
            id="userInput"
            value={inputDelUsuario}
            onChange={manejarCambioInput}
            placeholder="Ej: Futbol, piratas, animales fantasticos..."
            className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>

        <Button
          text={
            cargando
              ? "Generando..."
              : inputDelUsuario.trim() === ""
              ? "Generar cuento corto (2 parrafos)"
              : "Generar cuento personalizado (4 parrafos)"
          }
          onClick={generarTextoConGemini}
          className="w-full py-2 bg-blue-200 text-gray-800 font-medium rounded-md hover:bg-green-100 transition-colors"
        />

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {respuesta && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-md border border-amber-200">
            <h3 className="text-lg font-medium mb-2 text-gray-800">
              Tu cuento:
            </h3>
            <p className="whitespace-pre-line text-gray-700">{respuesta}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Home;
