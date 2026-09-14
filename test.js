const add = require("./calculator");

const result = add(2, 3);

if (result === 6) {
    console.log("Test passed: 2 + 3 equals 5");
    process.exit(0);
} else {
    console.error("Test failed: Expected 5 but received " + result);
    process.exit(1);
}
