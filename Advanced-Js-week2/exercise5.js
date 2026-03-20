import { teas } from "./teas.js";
// Function to run tasks sequentially
function runSequentially(tasks, finalCallback) {
  const results = [];
  // Helper function to run each task
  function runTask(index) {
    if (index >= tasks.length) {
      finalCallback(null, results);
      return;
    }
    tasks[index](() => {
      runTask(index + 1);
    });
  }
  runTask(0);
}
//test tasks
const tasks = [
  (done) => {
    setTimeout(() => {
      console.log("Task 1");
      done(); //call done when task is complete
    }, 300);
  },
  (done) => {
    setTimeout(() => {
      console.log("Task 2");
      done();
    }, 200);
  },
  (done) => {
    setTimeout(() => {
      console.log("Task 3");
      done();
    }, 100);
  },
  (done) => {
    setTimeout(() => {
      console.log("Task 4");
      done();
    }, 400);
  },
];
// Run tasks sequentially
runSequentially(tasks, (err, results) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("All tasks complete!");
});
