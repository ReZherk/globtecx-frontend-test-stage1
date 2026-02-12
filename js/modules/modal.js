import * as dom from "../core/dom.js";
import { getTaskToDeleteId, setTaskToDeleteId } from "../core/state.js";
import { deleteTask } from "./taskManager.js";
import { showNotification } from "../utils/helpers.js";

/**
 * Muestra el modal de confirmación
 */
export function showModal(taskId) {
  setTaskToDeleteId(taskId);
  dom.confirmModal.classList.add("active");
}

/**
 * Cierra el modal de confirmación
 */
export function closeModal() {
  dom.confirmModal.classList.remove("active");
  setTaskToDeleteId(null);
}

/**
 * Maneja la confirmación de eliminación
 */
export function handleConfirmDelete(onDelete) {
  const id = getTaskToDeleteId();

  if (id !== null) {
    deleteTask(id);
    closeModal();
    showNotification("Tarea eliminada exitosamente", "danger");

    if (onDelete) {
      onDelete();
    }
  }
}

/**
 * Maneja la cancelación de eliminación
 */
export function handleCancelDelete() {
  closeModal();
}
