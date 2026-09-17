const puzzleWindow = document.getElementById("puzzleWindow");
const windowBar = document.getElementById("windowBar");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

if (puzzleWindow && windowBar) {
  windowBar.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button")) return;

    const rect = puzzleWindow.getBoundingClientRect();

    dragging = true;
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    windowBar.setPointerCapture(event.pointerId);
  });

  windowBar.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    puzzleWindow.style.left =
      `${event.clientX - offsetX}px`;

    puzzleWindow.style.top =
      `${event.clientY - offsetY}px`;
  });

  windowBar.addEventListener("pointerup", () => {
    dragging = false;
  });

  windowBar.addEventListener("pointercancel", () => {
    dragging = false;
  });
}
const puzzleInput = document.getElementById("puzzleInput");

if (puzzleInput) {
  puzzleInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;

    const answer = puzzleInput.value.trim().toUpperCase();

    if (answer === "THORNS") {
      puzzleInput.value = "";
      puzzleInput.placeholder = "Something changed...";
      
      console.log("THORNS accepted.");
    } else {
      puzzleInput.value = "";
      puzzleInput.placeholder = "No.";
    }
  });
}
