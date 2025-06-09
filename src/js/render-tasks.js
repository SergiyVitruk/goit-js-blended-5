import { refs } from './refs';
import { getTasks } from './tasks';
import markupItem from './markup-tasks';

export function renderTasks() {
  refs.list.innerHTML = '';

  getTasks().forEach(task => {
    refs.list.insertAdjacentHTML('beforeend', markupItem(task));
  });
}
