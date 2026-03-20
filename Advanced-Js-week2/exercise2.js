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
//validating the order by checking if all tea IDs are valid and simulate a delay of 200ms
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
//calculate total price of the order and simulate a delay of 300ms
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
//check if all items in the order are in stock and simulate a delay of 400ms
function checkStock(order, callback) {
  setTimeout(() => {
    const stock = order.items.filter((item) => {
      const tea = teas.find((tea) => tea.id === item.teaId);
      return tea.stockCount >= item.grams;
    });
    callback({
      orderId: order.id,
      inStock: stock.length === order.items.length,
      shortages:
        stock.length === order.items.length ?
          []
        : ["Insufficient stock for some items"],
    });
  }, 400);
}
validateOrder(order, (result) => {
  console.log("Validation result:", result);
});
calculateTotal(order, (err, totalResult) => {
  if (err) {
    console.error("Error calculating total:", err);
    return;
  }

  console.log("Total calculation result:", totalResult);
});
checkStock(order, (stockResult) => {
  console.log("Stock check result:", stockResult);
});
