import { refs } from './refs.js';
import {
  saveThemeToStorage,
  loadThemeFromStorage,
} from './local-storage-api.js';

export function initThemeSwitcher() {
  const savedTheme = loadThemeFromStorage();

  refs.body.classList.remove('theme-light', 'theme-dark');

  if (savedTheme === 'theme-dark') {
    refs.body.classList.add('theme-dark');
  } else {
    refs.body.classList.add('theme-light');
  }

  refs.themeToggleBtn.addEventListener('click', () => {
    const isDark = refs.body.classList.contains('theme-dark');
    refs.body.classList.toggle('theme-dark', !isDark);
    refs.body.classList.toggle('theme-light', isDark);

    const currentTheme = refs.body.classList.contains('theme-dark')
      ? 'theme-dark'
      : 'theme-light';
    saveThemeToStorage(currentTheme);
  });
}
