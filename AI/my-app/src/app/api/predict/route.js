export async function POST(request) {
    try {
      const { inventory } = await request.json();
      console.log('Predict received inventory:', inventory);
      const validInventory = Array.isArray(inventory) ? inventory : [];
      const predictions = validInventory.map((item, index) => ({
        id: index + 1,
        name: item.name || 'Unknown',
        demand: Math.round((item.stock || 0) * (1 + Math.random() * 0.5)),
        reorder: Math.round((item.reorderPoint || 0) * (1 + Math.random() * 0.3)),
      }));
      console.log('Generated predictions:', predictions);
      return new Response(JSON.stringify(predictions), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error generating predictions:', error);
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }