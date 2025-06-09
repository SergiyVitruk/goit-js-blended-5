import { nanoid } from 'nanoid';

let tasks = [];

export function createTask(title, description) {
  return {
    id: nanoid(),
    title,
    description,
  };
}

export function addTask(task) {
  tasks.push(task);
}

export function removeTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
}

export function getTasks() {
  return tasks;
}

export function setTasks(newTasks) {
  tasks = newTasks;
}
