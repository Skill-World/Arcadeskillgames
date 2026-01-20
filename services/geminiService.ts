import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGameRecommendation = async (
  venueType: string,
  footTraffic: string,
  budget: string
): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const prompt = `
      You are an expert consultant for Arcade Skill Games (arcadeskillgames.com).
      A potential client is asking for a recommendation.
      
      Client Details:
      - Venue Type: ${venueType}
      - Foot Traffic: ${footTraffic}
      - Budget Level: ${budget}

      Based on this, suggest the best type of skill game setup (e.g., Vertical Cabinets, Fish Tables, or Countertop Kiosks) and explain why in 2-3 sentences. Focus on ROI and player engagement.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Contact our sales team for a personalized recommendation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI consultant is currently offline. Please fill out the contact form below.";
  }
};