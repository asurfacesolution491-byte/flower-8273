const puzzleWindow = document.getElementById("puzzleWindow");
const windowBar = document.getElementById("windowBar");
const puzzleInput = document.getElementById("puzzleInput");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

/* DRAG WINDOW */
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

    puzzleWindow.style.left = `${event.clientX - offsetX}px`;
    puzzleWindow.style.top = `${event.clientY - offsetY}px`;
  });

  windowBar.addEventListener("pointerup", () => {
    dragging = false;
  });

  windowBar.addEventListener("pointercancel", () => {
    dragging = false;
  });
}

/* NUMBER CREATURE */
const creatureShape = document.createElement("pre");

creatureShape.id = "numberCreature";

creatureShape.style.margin = "15px 0 0 0";
creatureShape.style.fontFamily = "monospace";
creatureShape.style.fontSize = "12px";
creatureShape.style.lineHeight = "1";
creatureShape.style.color = "#fff";
creatureShape.style.background = "#000";
creatureShape.style.whiteSpace = "pre";
creatureShape.style.overflow = "auto";

const BEE = [
  "....................",
  ".......##...........",
  "......####..........",
  ".......##...........",
  "....................",
  "....##.....#########",
  "...####...###########",
  "..######.############",
  ".#####################",
  ".#####################",
  "..####################",
  "...###################",
  "....#################",
  ".....###############..",
  "......############....",
  "......................",
  "....#.....#.....#.....",
  "...#......#......#....",
  ".................###.."
];

const BUTTERFLY = [
  ".......................",
  "...##...........##....",
  "..####.........####...",
  ".######.......######..",
  "########.....########.",
  "#########...#########.",
  "#######################",
  ".#####################.",
  "..###################..",
  "...#################...",
  ".....#############.....",
  ".......#########.......",
  ".........#####.........",
  "..........###..........",
  ".........#####.........",
  "........#.....#........",
  ".......#.......#......."
];

function randomDigit() {
  return Math.floor(Math.random() * 10);
}

function makeNumberCreature(shape) {
  return shape.map(row => {
    let result = "";

    for (const pixel of row) {
      result += pixel === "#" ? randomDigit() : " ";
    }

    return result;
  }).join("\n");
}

/* RANDOMLY CHOOSE BEE OR BUTTERFLY */
const chosenShape =
  Math.random() < 0.5 ? BEE : BUTTERFLY;

creatureShape.textContent = makeNumberCreature(chosenShape);

/* PUT CREATURE IN THE PUZZLE WINDOW */
const windowContent = document.querySelector(".window-content");

if (windowContent) {
  windowContent.appendChild(creatureShape);
}

/* THORNS INPUT */
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
