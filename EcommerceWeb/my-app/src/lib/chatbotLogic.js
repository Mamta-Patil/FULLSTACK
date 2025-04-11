import { getDb } from "./mongodb";

export async function personalizeResponse(message, userId, geminiResponse) {
  if (!userId) {
    // Non-logged-in user: return generic Gemini response
    return geminiResponse;
  }

  try {
    const db = await getDb();
    const purchases = await db
      .collection("purchases")
      .find({ userId })
      .toArray();

    if (purchases.length === 0) {
      return geminiResponse; // No purchases, use generic response
    }

    const purchaseItems = purchases.map((p) => p.itemName.toLowerCase());
    const lowerMessage = message.toLowerCase();

    // Check if message relates to purchased items
    const relatedItem = purchaseItems.find((item) =>
      lowerMessage.includes(item)
    );

    if (relatedItem) {
      return `I see you purchased a ${relatedItem}. ${geminiResponse} Would you like specific help with your ${relatedItem}?`;
    }

    // If no direct match, mention purchases generally
    return `Based on your purchases (${purchaseItems.join(", ")}), ${geminiResponse}`;
  } catch (error) {
    console.error("Error personalizing response:", error);
    return geminiResponse; // Fallback to Gemini response on error
  }
}