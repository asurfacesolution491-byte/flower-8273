const puzzleWindow = document.getElementById("puzzleWindow");
const windowBar = document.getElementById("windowBar");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

windowBar.addEventListener("pointerdown", (event) => {
  dragging = true;

  const rect = puzzleWindow.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;

  windowBar.setPointerCapture(event.pointerId);
});

windowBar.addEventListener("pointermove", (event) => {
  if (!dragging) return;

  puzzleWindow.style.left = `${event.clientX - offsetX}px`;
  puzzleWindow.style.top = `${event.clientY - offsetY}px`;
});

windowBar.addEventListener("pointerup", () => {
  dragging = false;
});
const puzzleWindow = document.getElementById("puzzleWindow");
const windowBar = document.getElementById("windowBar");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

windowBar.addEventListener("pointerdown", (event) => {
  dragging = true;

  const rect = puzzleWindow.getBoundingClientRect();
  offsetX = event.clientX - rect.left;
  offsetY = event.clientY - rect.top;

  windowBar.setPointerCapture(event.pointerId);
});

windowBar.addEventListener("pointermove", (event) => {
  if (!dragging) return;

  puzzleWindow.style.left = `${event.clientX - offsetX}px`;
  puzzleWindow.style.top = `${event.clientY - offsetY}px`;
});

windowBar.addEventListener("pointerup", () => {
  dragging = false;
});
