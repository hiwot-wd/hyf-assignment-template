import { teas } from "./teas.js";
const order = {
  id: 1001,
  customerId: 42,
  items: [
    { teaId: 1, grams: 100 },
    { teaId: 8, grams: 50 },
    { teaId: 3, grams: 200 },
  ],
};
function validateOrder(order, callback) {
  setTimeout(() => {
    const invalidItems = order.items.filter(
      (item) => !teas.find((tea) => tea.id === item.teaId),
    );
    const errors = invalidItems.map((item) => `Invalid tea ID:${item.teaId}`);
    callback({
      valid: invalidItems.length === 0,
      errors,
    });
  }, 200);
}
function calculateTotal(order, callback) {
  setTimeout(() => {
    const totals = order.items.reduce((sum, item) => {
      const tea = teas.find((tea) => tea.id === item.teaId);
      if (!tea) return sum; //skip if tea is not found
      return sum + tea.pricePerGram * item.grams;
    }, 0);
    callback(null, { orderId: order.id, total: totals });
  }, 300);
}
function checkStock(order, callback) {
  setTimeout(() => {
    const stock = order.items.filter((item) => {
      const tea = teas.find((tea) => tea.id === item.teaId);
      return tea.stockCount >= item.grams;
    });
    callback({
      orderId: order.id,
      inStock: stock.length === order.items.length,
      shortages: [],
    });
  }, 400);
}
//Order sequentially through nested callbacks
function processOrder(order) {
  console.log("Processing order", order.id);

  validateOrder(order, (validation) => {
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return;
    }
    console.log("Validation passed");
    //calculate total price
    calculateTotal(order, (err, pricing) => {
      if (err) {
        console.log("Pricing error:", err);
        return;
      }

      console.log("Total:", pricing.total, "DKK");

      // checkStock
      checkStock(order, (stock) => {
        if (!stock.inStock) {
          console.log("Stock check failed:", stock.shortages);
          return;
        }
        console.log("Stock check passed");
      });
    });
  });
}
//Run the order processing
processOrder(order);
