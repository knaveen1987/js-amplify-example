// dummy.ts - intentionally insecure TypeScript code for GitHub code scanning tests

// Hardcoded token for testing
const TOKEN = "hardcoded-token-123456";

// Hardcoded token for testing
const Secret_Key = "21435-54545-123456-YETYD";


function renderMessage(userInput: string) {
  // XSS vulnerability
  const div = document.getElementById("output");
  if (div) {
    div.innerHTML = userInput; // unescaped HTML
  }
}

function unsafeEval(code: string) {
  // Eval vulnerability
  return eval(code);
}

function weakHash(data: string) {
  // Weak crypto example (MD5)
  const crypto = require("crypto");
  return crypto.createHash("md5").update(data).digest("hex");
}

function main() {
  const input = (document.getElementById("in") as HTMLInputElement).value;
  renderMessage(input);

  unsafeEval("console.log('Eval executed!')");

  console.log("Weak hash:", weakHash("password"));
}

main();
