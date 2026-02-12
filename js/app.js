import * as dom from "./core/dom.js";
import { setTasks, getFilteredTasks, getTaskCounters } from "./core/state.js";
import { loadTasksFromLocalStorage } from "./core/storage.js";
import { toggleTaskComplete } from "./modules/taskManager.js";
import {
  handleFormSubmit,
  fillFormForEdit,
  handleCancelEdit,
} from "./modules/formHandler.js";
import { handleFilterChange, updateCounters } from "./modules/filters.js";
import {
  showModal,
  handleConfirmDelete,
  handleCancelDelete,
} from "./modules/modal.js";
import { validateTitle } from "./utils/validators.js";
import { createTaskHTML } from "./utils/helpers.js";

/**
 * Renderiza la lista de tareas
 */
function renderTasks() {
  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    dom.taskList.innerHTML = "";
    dom.emptyState.classList.remove("hidden");
    return;
  }

  dom.emptyState.classList.add("hidden");

  dom.taskList.innerHTML = filteredTasks
    .map((task) => createTaskHTML(task))
    .join("");

  // Agregar event listeners a los botones de las tareas
  filteredTasks.forEach((task) => {
    const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);

    if (taskElement) {
      const completeBtn = taskElement.querySelector(".complete-btn");
      const editBtn = taskElement.querySelector(".edit-btn");
      const deleteBtn = taskElement.querySelector(".delete-btn");

      completeBtn.addEventListener("click", () => {
        toggleTaskComplete(task.id);
        renderTasks();
        updateCounters(getTaskCounters());
      });

      editBtn.addEventListener("click", () => {
        fillFormForEdit(task.id);
      });

      deleteBtn.addEventListener("click", () => {
        showModal(task.id);
      });
    }
  });
}

/**
 * Actualiza la UI completa
 */
function updateUI() {
  renderTasks();
  updateCounters(getTaskCounters());
}

/**
 * Adjunta todos los event listeners
 */
function attachEventListeners() {
  // Formulario
  dom.taskForm.addEventListener("submit", (e) => {
    handleFormSubmit(e, updateUI);
  });

  dom.cancelBtn.addEventListener("click", handleCancelEdit);

  // Validación en tiempo real
  dom.taskTitle.addEventListener("input", validateTitle);

  // Filtros
  dom.filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      handleFilterChange(e, renderTasks);
    });
  });

  // Modal
  dom.confirmDelete.addEventListener("click", () => {
    handleConfirmDelete(updateUI);
  });

  dom.cancelDelete.addEventListener("click", handleCancelDelete);

  dom.confirmModal.addEventListener("click", (e) => {
    if (e.target === dom.confirmModal) {
      handleCancelDelete();
    }
  });
}

/**
 * Inicializa la aplicación
 */
function init() {
  console.log("🚀 Iniciando Gestor de Tareas GLOBTECx...");

  // Cargar tareas desde localStorage
  const storedTasks = loadTasksFromLocalStorage();
  setTasks(storedTasks);

  // Renderizar estado inicial
  updateUI();

  // Adjuntar event listeners
  attachEventListeners();

  console.log("✅ Gestor de Tareas GLOBTECx iniciado correctamente");
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
