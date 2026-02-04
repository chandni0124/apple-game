// 사과게임 - 합이 10이 되는 조합 찾기
const GRID_SIZE = 25; // 5x5 그리드
const TARGET_SUM = 10;
const GAME_TIME = 120; // 2분 (초)

let score = 0;
let combo = 0;
let timeLeft = GAME_TIME;
let timerId = null;
let selectedApples = [];
let gridData = [];
let isGameOver = false;

const gridEl = document.getElementById("grid");
const scoreEl = document.getElementById("score");
const comboEl = document.getElementById("combo");
const timerEl = document.getElementById("timer");
const submitBtn = document.getElementById("submit");
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const finalScoreEl = document.getElementById("final-score");

// 그리드 생성 (1~9 숫자 랜덤 배치)
function createGrid() {
  gridData = [];
  gridEl.innerHTML = "";

  for (let i = 0; i < GRID_SIZE; i++) {
    const num = Math.floor(Math.random() * 9) + 1;
    gridData.push(num);

    const apple = document.createElement("div");
    apple.className = "apple";
    apple.textContent = num;
    apple.dataset.index = i;
    apple.dataset.value = num;
    apple.addEventListener("click", () => toggleApple(i));
    gridEl.appendChild(apple);
  }
}

function toggleApple(index) {
  if (isGameOver) return;

  const apple = gridEl.children[index];
  if (apple.classList.contains("removed")) return;

  const idx = selectedApples.indexOf(index);
  if (idx > -1) {
    selectedApples.splice(idx, 1);
    apple.classList.remove("selected");
  } else {
    selectedApples.push(index);
    apple.classList.add("selected");
  }

  updateSubmitButton();
}

function getSelectedSum() {
  return selectedApples.reduce((sum, idx) => sum + gridData[idx], 0);
}

function updateSubmitButton() {
  const sum = getSelectedSum();
  submitBtn.disabled = sum !== TARGET_SUM;
  submitBtn.textContent =
    sum === TARGET_SUM ? "선택 완료 (합=10) ✓" : `선택 완료 (합=${sum})`;
}

function removeSelectedApples() {
  const indices = [...selectedApples].sort((a, b) => b - a);

  indices.forEach((idx) => {
    const apple = gridEl.children[idx];
    apple.classList.add("removed");

    setTimeout(() => {
      const num = Math.floor(Math.random() * 9) + 1;
      gridData[idx] = num;
      apple.classList.remove("removed", "selected");
      apple.textContent = num;
      apple.dataset.value = num;
    }, 400);
  });

  selectedApples = [];
  updateSubmitButton();
}

function addScore(count) {
  combo++;
  const points = count * (combo > 1 ? combo : 1);
  score += points;
  scoreEl.textContent = score;
  comboEl.textContent = combo;

  if (combo > 1) {
    showComboPopup(combo);
  }
}

function showComboPopup(comboNum) {
  const popup = document.createElement("div");
  popup.className = "combo-popup";
  popup.textContent = `${comboNum} Combo!`;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 600);
}

function resetCombo() {
  combo = 0;
  comboEl.textContent = "0";
}

function submitSelection() {
  const sum = getSelectedSum();
  if (sum !== TARGET_SUM) return;

  const count = selectedApples.length;
  addScore(count);
  removeSelectedApples();
}

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    timerEl.textContent = `${min}:${sec.toString().padStart(2, "0")}`;

    if (timeLeft <= 30) {
      timerEl.parentElement.classList.add("warning");
    }

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  isGameOver = true;
  clearInterval(timerId);
  finalScoreEl.textContent = score;
  endScreen.classList.remove("hidden");
}

function startGame() {
  score = 0;
  combo = 0;
  timeLeft = GAME_TIME;
  selectedApples = [];
  isGameOver = false;

  scoreEl.textContent = "0";
  comboEl.textContent = "0";
  timerEl.textContent = "2:00";
  timerEl.parentElement.classList.remove("warning");

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");

  createGrid();
  updateSubmitButton();
  startTimer();
}

function init() {
  createGrid();
  updateSubmitButton();

  submitBtn.addEventListener("click", submitSelection);

  document.getElementById("start-btn").addEventListener("click", startGame);
  document.getElementById("restart-btn").addEventListener("click", startGame);
}

// 선택 해제 시 콤보 리셋
gridEl.addEventListener("click", () => {
  if (selectedApples.length === 0 && combo > 0) {
    setTimeout(resetCombo, 500);
  }
});

init();
