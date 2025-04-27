import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configurar la API de Gemini (usa variables de entorno de Vite)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash";

// Funcion para generar cuento y autor con Gemini
async function generateStoryAndAuthorWithGemini(prompt) {
  try {
    // Mejoramos el prompt para generar un cuento y la informacion del autor
    const storyPrompt = `
    Genera los siguientes elementos separados:
    
    1. AUTOR:
    - Nombre y apellido de un autor ficticio
    - Edad del autor (entre 25 y 85 años)
    - Una biografia breve y creativa (maximo 2 parrafos)
    
    2. CUENTO:
    Escribe un cuento corto basado en esta idea: "${prompt}".
    El cuento debe tener un titulo, introduccion, desarrollo y desenlace.
    
    Formatea tu respuesta exactamente asi:
    AUTOR_NOMBRE: [nombre y apellido]
    AUTOR_EDAD: [edad]
    AUTOR_BIO: [biografia]
    
    CUENTO:
    [Escribe aqui el cuento completo]
    `;

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const result = await model.generateContent(storyPrompt);
    const responseText = await result.response.text();

    return parseResponse(responseText);
  } catch (error) {
    console.error("Error al generar cuento con Gemini:", error);
    throw error;
  }
}

// Funcion para analizar la respuesta y extraer autor y cuento
function parseResponse(responseText) {
  // Extraer informacion del autor
  const authorNameMatch = responseText.match(/AUTOR_NOMBRE:\s*(.*?)(?=\n|$)/);
  const authorAgeMatch = responseText.match(/AUTOR_EDAD:\s*(.*?)(?=\n|$)/);
  const authorBioMatch = responseText.match(
    /AUTOR_BIO:\s*([\s\S]*?)(?=\n\s*\n\s*CUENTO:|$)/
  );

  // Extraer el cuento
  const storyMatch = responseText.match(/CUENTO:\s*([\s\S]*?)$/);

  const authorInfo = {
    name: authorNameMatch ? authorNameMatch[1].trim() : "Autor Desconocido",
    age: authorAgeMatch ? parseInt(authorAgeMatch[1]) : 0,
    bio: authorBioMatch
      ? authorBioMatch[1].trim()
      : "Sin informacion biografica",
  };

  const storyContent = storyMatch ? storyMatch[1].trim() : responseText;

  return {
    author: authorInfo,
    story: storyContent,
  };
}

// Componente de Chat para generar cuentos
function Chat() {
  const [prompt, setPrompt] = useState("");
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);

    try {
      // Generar cuento y autor con Gemini
      const { author, story } = await generateStoryAndAuthorWithGemini(prompt);

      // Crear nuevo cuento con ID unico
      const newStory = {
        id:
          stories.length > 0
            ? Math.max(...stories.map((story) => story.id)) + 1
            : 1,
        prompt: prompt,
        content: story,
        author: author,
        createdAt: new Date().toISOString(),
      };

      // Agregar el cuento a la lista
      setStories((prev) => [...prev, newStory]);

      // Limpiar el prompt
      setPrompt("");
    } catch (error) {
      console.error(error);
      alert("Error al generar el cuento: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Guardar cuentos en localStorage
  useEffect(() => {
    if (stories.length > 0) {
      localStorage.setItem("generated-stories", JSON.stringify(stories));
    }
  }, [stories]);

  // Cargar cuentos de localStorage
  useEffect(() => {
    const savedStories = localStorage.getItem("generated-stories");
    if (savedStories) {
      try {
        setStories(JSON.parse(savedStories));
      } catch (e) {
        console.error("Error al cargar cuentos:", e);
      }
    }
  }, []);

  return (
    <div className="chat-container">
      <h1 className="text-2xl font-bold mb-4">Generador de Cuentos</h1>

      {/* Formulario para enviar prompts */}
      <form onSubmit={handleSubmit} className="message-form mb-6">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe una idea para un cuento..."
          disabled={isLoading}
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isLoading ? "Generando cuento..." : "Generar Cuento"}
        </button>
      </form>

      {/* Lista de cuentos generados (solo mostrando el cuento) */}
      <div className="stories-list">
        <h2 className="text-xl font-semibold mb-2">
          Mis Cuentos ({stories.length})
        </h2>

        {stories.length === 0 ? (
          <p className="text-gray-500">No hay cuentos generados todavia.</p>
        ) : (
          stories.map((story) => (
            <div
              key={story.id}
              className="story-card border rounded-md p-4 mb-4"
            >
              <div className="story-header mb-2">
                <span className="font-bold">Cuento #{story.id}</span>
              </div>

              <div className="story-content whitespace-pre-line">
                {story.content}
              </div>

              <p className="text-xs text-gray-500 mt-2">
                Creado el: {new Date(story.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Chat;
