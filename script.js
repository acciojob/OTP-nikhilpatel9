//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
  // Move forward when typing
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1);
    if (input.value && i < inputs.length - 1) {
      inputs[i + 1].focus();
    }
  });

  // Backspace: clear + move back
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      input.value = "";
      if (i > 0) inputs[i - 1].focus();
    }
  });
});