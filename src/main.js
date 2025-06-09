import { refs } from './js/refs.js';
import {
  createTask,
  addTask,
  getTasks,
  setTasks,
  removeTask,
} from './js/tasks.js';
import {
  saveTasksToStorage,
  loadTasksFromStorage,
} from './js/local-storage-api.js';
import { renderTasks } from './js/render-tasks.js';
import { initThemeSwitcher } from './js/theme-switcher.js';

const savedTasks = loadTasksFromStorage();
setTasks(savedTasks);
renderTasks();

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();

  if (!title || !description) {
    return alert('Fill all fields!');
  }

  const task = createTask(title, description);
  addTask(task);
  saveTasksToStorage(getTasks());
  renderTasks();

  event.target.reset();
});

refs.list.addEventListener('click', event => {
  if (event.target.classList.contains('task-list-item-btn')) {
    const li = event.target.closest('.task-list-item');
    const id = li.dataset.id;

    removeTask(id);
    saveTasksToStorage(getTasks());
    renderTasks();
  }
});

initThemeSwitcher();
