const TASKS_KEY = 'listItemsValue';
const THEME_KEY = 'theme';

export function saveTasksToStorage(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

export function loadTasksFromStorage() {
  return JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
}

export function saveThemeToStorage(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadThemeFromStorage() {
  return localStorage.getItem(THEME_KEY) || 'theme-light';
}
