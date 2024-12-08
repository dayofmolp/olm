// Update Dashboard Progress
let currentLevel = 1;
let currentXP = 0;
const xpPerLevel = 100;

function gainXP(amount) {
  currentXP += amount;
  if (currentXP >= xpPerLevel) {
    currentXP -= xpPerLevel;
    currentLevel++;
    document.getElementById('current-title').innerText = getTitle(currentLevel);
  }
  updateDashboard();
}

function updateDashboard() {
  document.getElementById('current-level').innerText = currentLevel;
  document.getElementById('current-xp').innerText = `${currentXP} / ${xpPerLevel}`;
}

function getTitle(level) {
  if (level >= 10) return "Advanced Scholar";
  if (level >= 5) return "Intermediate Scholar";
  return "Novice Scholar";
}

// Manage Goals
const goalList = document.getElementById('goal-list');
document.getElementById('goal-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newGoal = document.getElementById('new-goal').value;
  const li = document.createElement('li');
  li.innerHTML = `${newGoal} <button onclick="completeGoal(this)">Complete</button>`;
  goalList.appendChild(li);
  document.getElementById('new-goal').value = '';
});

function completeGoal(button) {
  button.parentElement.remove();
  gainXP(20);
}

// Save and Display Plans
document.getElementById('save-plans').addEventListener('click', () => {
  const plans = document.getElementById('planner-input').value;
  document.getElementById('saved-plans').innerText = `Saved Plans:\n${plans}`;
});
