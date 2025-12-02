// xss-demo.ts - intentionally insecure for GitHub code scanning (XSS example)

// Reads a value from the URL query string:  ?msg=<value>
function getMessageFromUrl(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("msg") || "";
}

function displayMessage() {
  const message = getMessageFromUrl();

  // XSS vulnerability: directly injecting untrusted data into DOM
  const container = document.getElementById("messageBox");
  if (container) {
    container.innerHTML = `User says: ${message}`;  // ❌ vulnerable
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayMessage();
});
