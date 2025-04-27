// Este archivo maneja todas las interacciones con la API de Google Gemini
import { GoogleGenerativeAI } from "@google/generative-ai";

// La API KEY se obtiene de las variables de entorno
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Creamos una instancia de la API
const genAI = new GoogleGenerativeAI(API_KEY);

// Modelo a utilizar
const MODEL_NAME = "gemini-1.5-flash";


export async function generateText(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error al generar texto:", error);
    throw error;
  }
}

export default {
  generateText,
};
