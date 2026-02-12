import * as dom from "../core/dom.js";

/**
 * Valida el campo título en tiempo real
 */
export function validateTitle() {
  const value = dom.taskTitle.value.trim();

  if (value.length === 0) {
    dom.titleError.textContent = "";
    return false;
  }

  if (value.length < 3) {
    dom.titleError.textContent = "El título debe tener al menos 3 caracteres";
    return false;
  }

  dom.titleError.textContent = "";
  return true;
}

/**
 * Valida todo el formulario
 */
export function validateForm() {
  const title = dom.taskTitle.value.trim();
  const priority = dom.taskPriority.value;

  let isValid = true;

  if (title.length < 3) {
    dom.titleError.textContent = "El título debe tener al menos 3 caracteres";
    isValid = false;
  } else {
    dom.titleError.textContent = "";
  }

  if (!priority) {
    alert("Por favor, seleccione una prioridad");
    isValid = false;
  }

  return isValid;
}
