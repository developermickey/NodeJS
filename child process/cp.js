const cp = require("child_process");

// cp.execSync("calc"); // open calculator

// cp.execSync("start chrome https://www.google.com");

console.log("output " + cp.execSync("node my.js"));
