import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
export const getTacticalAdvice = async (game: string, level: string, query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Pro coach advice for ${game} player at ${level} level. Query: ${query}`
    });
    return response.text;
  } catch { return "Service unavailable."; }
};
Api kay 
AIzaSyDKeyRRSu_-K1UbFmjItgSZnEuw4333fRA
