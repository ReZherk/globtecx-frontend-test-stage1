/**
 * Genera un ID único basado en timestamp y número aleatorio
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Escapa caracteres HTML para prevenir XSS
 */
export function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Capitaliza la primera letra de un string
 */
export function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formatea una fecha en formato español
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString + "T00:00:00");
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("es-ES", options);
}

/**
 * Muestra una notificación temporal
 */
export function showNotification(message, type = "success") {
  // Crear elemento de notificación
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Estilos inline para la notificación
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === "success" ? "#28a745" : "#dc3545"};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;

  document.body.appendChild(notification);

  // Remover después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

/**
 * Crea el HTML de una tarea
 */
export function createTaskHTML(task) {
  const completedClass = task.completed ? "completed" : "";
  const priorityClass = `priority-${task.priority}`;
  const completeButtonText = task.completed ? "Desmarcar" : "Completar";

  return `
        <div class="task-item ${completedClass} ${priorityClass}" data-task-id="${task.id}">
            <div class="task-header">
                <div class="task-title-wrapper">
                    <h3 class="task-title">${escapeHTML(task.title)}</h3>
                    <div class="task-meta">
                        <span class="task-priority ${task.priority}">
                            ${capitalizeFirst(task.priority)}
                        </span>
                        ${
                          task.dueDate
                            ? `<span class="task-date">${formatDate(task.dueDate)}</span>`
                            : ""
                        }
                    </div>
                    ${
                      task.description
                        ? `<p class="task-description">${escapeHTML(task.description)}</p>`
                        : ""
                    }
                </div>
                <div class="task-actions">
                    <button class="complete-btn">${completeButtonText}</button>
                    <button class="edit-btn">Editar</button>
                    <button class="delete-btn">Eliminar</button>
                </div>
            </div>
        </div>
    `;
}
