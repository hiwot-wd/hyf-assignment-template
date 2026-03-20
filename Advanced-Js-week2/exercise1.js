import { teas } from "./teas.js";
//Aggregate stock count by caffeine level
function stockByCaffeine(teas) {
  return teas.reduce((acc, tea) => {
    acc[tea.caffeineLevel] = (acc[tea.caffeineLevel] || 0) + tea.stockCount;
    return acc;
  }, {});
}
console.log(stockByCaffeine(teas));
