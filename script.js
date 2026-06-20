function toDateString(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDisplayDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

function getTodayString() {
  return toDateString(new Date());
}

function showFact(dateStr) {
  const content = document.getElementById('factText');
  const detail = document.getElementById('factDetail');
  const label = document.getElementById('factLabel');
  const sourceEl = document.getElementById('factSource');
  const wrapper = document.querySelector('.fact-content');

  const today = getTodayString();
  const isToday = dateStr === today;

  label.textContent = isToday ? 'Today\'s fact' : `Fact from ${formatDisplayDate(dateStr)}`;

  wrapper.classList.add('fading');

  setTimeout(() => {
    const entry = FACTS[dateStr];
    if (entry) {
      content.textContent = entry.fact;
      detail.textContent = entry.detail || '';
      detail.style.display = entry.detail ? '' : 'none';
      const isAI = entry.source === 'ai';
      const who = isAI ? 'AI' : 'stumpted';
      sourceEl.textContent = `${isToday ? "Today's" : "This"} fact was picked by ${who}`;
      sourceEl.classList.toggle('is-ai', isAI);
      sourceEl.style.display = '';
    } else {
      content.textContent = 'There is no fact written today.';
      detail.textContent = 'stumpted is being lazy.';
      detail.style.display = '';
      sourceEl.style.display = 'none';
    }
    wrapper.classList.remove('fading');
  }, 200);
}

function init() {
  const today = getTodayString();
  const picker = document.getElementById('datePicker');
  const display = document.getElementById('currentDateDisplay');

  display.textContent = formatDisplayDate(today);

  picker.min = FACTS_START_DATE;
  picker.max = today;
  picker.value = today;

  showFact(today);

  picker.addEventListener('change', () => {
    const chosen = picker.value;
    if (!chosen) return;
    if (chosen > today) {
      picker.value = today;
      return;
    }
    display.textContent = formatDisplayDate(chosen);
    showFact(chosen);
  });

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let next;
    if (!current) {
      next = systemDark ? 'light' : 'dark';
    } else if (current === 'dark') {
      next = 'light';
    } else {
      next = 'dark';
    }
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

document.addEventListener('DOMContentLoaded', init);
