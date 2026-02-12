// Estado de la aplicación
const state = {
  tasks: [],
  editingTaskId: null,
  taskToDeleteId: null,
  currentFilter: "todas",
};

/**
 * Obtiene todas las tareas
 */
export function getTasks() {
  return state.tasks;
}

/**
 * Establece las tareas
 */
export function setTasks(newTasks) {
  state.tasks = newTasks;
}

/**
 * Obtiene el ID de la tarea en edición
 */
export function getEditingTaskId() {
  return state.editingTaskId;
}

/**
 * Establece el ID de la tarea en edición
 */
export function setEditingTaskId(id) {
  state.editingTaskId = id;
}

/**
 * Obtiene el ID de la tarea a eliminar
 */
export function getTaskToDeleteId() {
  return state.taskToDeleteId;
}

/**
 * Establece el ID de la tarea a eliminar
 */
export function setTaskToDeleteId(id) {
  state.taskToDeleteId = id;
}

/**
 * Obtiene el filtro actual
 */
export function getCurrentFilter() {
  return state.currentFilter;
}

/**
 * Establece el filtro actual
 */
export function setCurrentFilter(filter) {
  state.currentFilter = filter;
}

/**
 * Obtiene las tareas filtradas según el filtro actual
 */
export function getFilteredTasks() {
  switch (state.currentFilter) {
    case "pendientes":
      return state.tasks.filter((task) => !task.completed);
    case "completadas":
      return state.tasks.filter((task) => task.completed);
    case "todas":
    default:
      return state.tasks;
  }
}

/**
 * Obtiene los contadores de tareas
 */
export function getTaskCounters() {
  const total = state.tasks.length;
  const completed = state.tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  return { total, completed, pending };
}
