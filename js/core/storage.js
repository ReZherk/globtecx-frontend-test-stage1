const STORAGE_KEY = "globtecx_tasks";

/**
 * Guarda las tareas en localStorage
 */
export function saveTasksToLocalStorage(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
    throw new Error("Error al guardar las tareas");
  }
}

/**
 * Carga las tareas desde localStorage
 */
export function loadTasksFromLocalStorage() {
  try {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return [];
  } catch (error) {
    console.error("Error al cargar desde localStorage:", error);
    return [];
  }
}

/**
 * Limpia todas las tareas del localStorage
 */
export function clearLocalStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error al limpiar localStorage:", error);
  }
}
