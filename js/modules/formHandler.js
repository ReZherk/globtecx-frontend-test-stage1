import * as dom from "../core/dom.js";
import { getEditingTaskId, setEditingTaskId } from "../core/state.js";
import { addTask, updateTask, getTaskById } from "./taskManager.js";
import { validateForm } from "../utils/validators.js";
import { showNotification } from "../utils/helpers.js";

/**
 * Maneja el envío del formulario
 */
export function handleFormSubmit(e, onSuccess) {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const taskData = getFormData();

  if (getEditingTaskId() !== null) {
    updateTask(getEditingTaskId(), taskData);
    showNotification("Tarea actualizada exitosamente", "success");
    setEditingTaskId(null);
  } else {
    addTask(taskData);
    showNotification("Tarea agregada exitosamente", "success");
  }

  resetForm();

  if (onSuccess) {
    onSuccess();
  }
}

/**
 * Obtiene los datos del formulario
 */
export function getFormData() {
  return {
    title: dom.taskTitle.value.trim(),
    priority: dom.taskPriority.value,
    dueDate: dom.taskDueDate.value,
    description: dom.taskDescription.value.trim(),
    completed: false,
  };
}

/**
 * Resetea el formulario a su estado inicial
 */
export function resetForm() {
  dom.taskForm.reset();
  dom.titleError.textContent = "";
  dom.submitBtn.textContent = "Agregar Tarea";
  dom.cancelBtn.style.display = "none";
  setEditingTaskId(null);
}

/**
 * Llena el formulario con los datos de una tarea para edición
 */
export function fillFormForEdit(taskId) {
  const task = getTaskById(taskId);

  if (task) {
    dom.taskTitle.value = task.title;
    dom.taskPriority.value = task.priority;
    dom.taskDueDate.value = task.dueDate || "";
    dom.taskDescription.value = task.description || "";

    dom.submitBtn.textContent = "Actualizar Tarea";
    dom.cancelBtn.style.display = "inline-block";

    setEditingTaskId(taskId);

    // Scroll al formulario
    document.querySelector(".task-form-section").scrollIntoView({
      behavior: "smooth",
    });
  }
}

/**
 * Maneja la cancelación de edición
 */
export function handleCancelEdit() {
  resetForm();
}
