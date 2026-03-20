import { teas } from "./teas.js";
import fs from "fs";
function generateInventoryReport(callback) {
  fs.readFile("./inventory-updates.json", "utf8", (error, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    // Parse the inventory updates and generate the report
    const updates = JSON.parse(data);
    const report = teas.map((tea) => {
      const change = updates.reduce((acc, update) => {
        if (update.teaId === tea.id) {
          return acc + update.change;
        }
        return acc;
      }, 0);
      return {
        name: tea.name,
        was: tea.stockCount,
        change,
        now: tea.stockCount + change,
      };
    });
    // Format the report as a string
    const formattedReport =
      "Inventory Report:\n" +
      report
        .map(
          (report) =>
            ` - ${report.name}: was ${report.was}, change ${report.change >= 0 ? "+" : ""}${report.change}, now ${report.now}`,
        )
        .join("\n");

    callback(null, formattedReport);
  });
}
generateInventoryReport((error, report) => {
  if (error) {
    console.error("Failed:", error.message);
    return;
  }
  console.log(report);
});
