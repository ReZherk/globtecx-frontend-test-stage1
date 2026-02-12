import { getTasks, setTasks } from "../core/state.js";
import { saveTasksToLocalStorage } from "../core/storage.js";
import { generateId } from "../utils/helpers.js";

/**
 * Agrega una nueva tarea
 */
export function addTask(taskData) {
  const tasks = getTasks();

  const newTask = {
    id: generateId(),
    ...taskData,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  setTasks(tasks);
  saveTasksToLocalStorage(tasks);

  return newTask;
}

/**
 * Actualiza una tarea existente
 */
export function updateTask(id, taskData) {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...taskData,
      updatedAt: new Date().toISOString(),
    };

    setTasks(tasks);
    saveTasksToLocalStorage(tasks);
    return true;
  }

  return false;
}

/**
 * Elimina una tarea
 */
export function deleteTask(id) {
  const tasks = getTasks();
  const filteredTasks = tasks.filter((task) => task.id !== id);

  setTasks(filteredTasks);
  saveTasksToLocalStorage(filteredTasks);
}

/**
 * Alterna el estado de completado de una tarea
 */
export function toggleTaskComplete(id) {
  const tasks = getTasks();
  const task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = !task.completed;
    task.updatedAt = new Date().toISOString();

    setTasks(tasks);
    saveTasksToLocalStorage(tasks);
    return true;
  }

  return false;
}

/**
 * Obtiene una tarea por su ID
 */
export function getTaskById(id) {
  const tasks = getTasks();
  return tasks.find((task) => task.id === id) || null;
}
