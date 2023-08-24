const MOVE_STEP = 10;
const BASE_ROOT = "/home/shin $ ";

const cursor = document.getElementById("cursor");
const typerElement = document.getElementById("typer");
const textAreaInput = document.getElementById("texter");
const mobileInput = document.querySelector("#mobileInput input");
const terminal = document.getElementById("terminal");
let contentHook = document.getElementById("contentHook");

window.onload = init;

function init() {
  cursor.style.left = "0px";
}

textAreaInput.addEventListener("input", (event) => {
  typerElement.textContent = event.target.value;
});

function focusOnTextArea() {
  textAreaInput.focus();
}

function moveCursor(count, event, moveStep = MOVE_STEP) {
  const keyCode = event.key;

  if (!isArrowKey(keyCode)) {
    return;
  }

  const currentLeft = getCurrentLeftOffset(cursor);
  const newPosition = calculateCursorPosition(
    keyCode,
    currentLeft,
    count,
    moveStep
  );

  if (newPosition !== undefined) {
    cursor.style.left = newPosition + "px";
  }
}

function getCurrentLeftOffset(element) {
  return parseInt(element.style.left) || 0;
}

function calculateCursorPosition(
  key,
  currentLeftOffset,
  count,
  moveStep = MOVE_STEP
) {
  if (isLeftArrow(key) && currentLeftOffset >= -((count - 1) * moveStep)) {
    return currentLeftOffset - moveStep;
  } else if (isRightArrow(key) && currentLeftOffset + moveStep <= 0) {
    return currentLeftOffset + moveStep;
  }
}

function isRightArrow(key) {
  return key === "ArrowRight";
}

function isLeftArrow(key) {
  return key === "ArrowLeft";
}

function isArrowKey(key) {
  return key === "ArrowLeft" || key === "ArrowRight";
}

function alert(txt) {
  console.log(txt);
}