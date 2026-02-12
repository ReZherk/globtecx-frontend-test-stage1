import * as dom from "../core/dom.js";
import { setCurrentFilter } from "../core/state.js";

/**
 * Maneja el cambio de filtro
 */
export function handleFilterChange(e, onFilterChange) {
  const filter = e.target.dataset.filter;
  setCurrentFilter(filter);

  dom.filterButtons.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  if (onFilterChange) {
    onFilterChange();
  }
}

/**
 * Actualiza los contadores de tareas
 */
export function updateCounters(counters) {
  dom.totalCount.textContent = counters.total;
  dom.completedCount.textContent = counters.completed;
  dom.pendingCount.textContent = counters.pending;
}
