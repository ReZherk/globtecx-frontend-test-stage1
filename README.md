# 📝 Gestor de Tareas - GLOBTECx

Aplicación web moderna de gestión de tareas (ToDo List) desarrollada con **HTML5, CSS3 y JavaScript ES6+**. Este proyecto ha sido diseñado bajo una arquitectura modular, escalable y siguiendo los principios de código limpio para cumplir con los requisitos de la Etapa 1 de la prueba técnica de **GLOBTECx**.

---

## 🚀 Características

### Funcionalidades Principales

- **CRUD Completo:** Crear, leer, editar y eliminar tareas.
- **Gestión de Estado:** Marcar tareas como completadas y filtros por estado (Todas, Pendientes, Completadas).
- **Atributos de Tarea:** Soporte para títulos (mín. 3 caracteres), prioridades (Baja, Media, Alta), fechas límite y descripciones.
- **Persistencia:** Almacenamiento local mediante `localStorage`.
- **UI/UX Avanzada:**
  - Diseño **Responsive** (Mobile-first).
  - Notificaciones visuales y validación en tiempo real.
  - Modal de confirmación para eliminaciones.
  - Contadores dinámicos de tareas.

---

## 📁 Estructura del Proyecto

La aplicación utiliza una estructura de archivos organizada por responsabilidades (Separation of Concerns):

```text
task-manager/
├── index.html              # Estructura semántica
├── css/                    # Diseño modular
│   ├── base/               # Variables, reset y utilidades
│   ├── components/         # Botones, tareas, modales y formularios
│   ├── layout/             # Header, main y footer
│   └── styles.css          # Importador principal
└── js/                     # Lógica de la aplicación
    ├── app.js              # Punto de entrada (Orquestador)
    ├── core/               # Estado, persistencia y referencias DOM
    ├── modules/            # CRUD, filtros, modal y formularios
    └── utils/              # Validadores y funciones auxiliares

```

---

## 🛠️ Tecnologías y Arquitectura

### Stack Técnico

- **HTML5:** Estructura semántica y accesibilidad.
- **CSS3:** Diseño modular con **Custom Properties (Variables)**, Flexbox y CSS Grid.
- **Vanilla JS:** Módulos ES6 nativos, sin frameworks ni dependencias externas.

### Flujo de Datos (Arquitectura)

1. **Interacción:** El usuario realiza una acción en la UI.
2. **Captura:** `app.js` detecta el evento y delega al módulo correspondiente.
3. **Lógica:** El módulo (`taskManager`, `filters`, etc.) procesa la información.
4. **Estado:** Se actualiza `state.js` (única fuente de verdad) y se sincroniza con `storage.js`.
5. **Renderizado:** La interfaz se actualiza automáticamente para reflejar el nuevo estado.

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores

| Categoría    | Color Hex | Uso                   |
| ------------ | --------- | --------------------- |
| **Primario** | `#0a6847` | Identidad GLOBTECx    |
| **Alta**     | `#ff6b6b` | Prioridad crítica     |
| **Media**    | `#ffa500` | Prioridad moderada    |
| **Baja**     | `#4ecdc4` | Prioridad informativa |

### Breakpoints Responsive

- **Mobile:** `< 768px`
- **Tablet:** `768px - 968px`
- **Desktop:** `> 968px`

---

## 📖 Guía de Uso y Despliegue

### Instalación Local

1. Clonar el repositorio:

```bash
git clone https://github.com/ReZherk/globtecx-frontend-test-stage1.git

```

2. Navegar a la carpeta y abrir `index.html` en el navegador, o usar la extensión **Live Server** en VS Code (recomendado).

### Despliegue (GitHub Pages)

1. Subir el código a un repositorio de GitHub.
2. Ir a **Settings > Pages**.
3. Seleccionar la rama `main` y la carpeta `/root`.
4. Guardar y acceder a la URL generada.

---

**Desarrollado por Patrick Alexander Alcantara Sedano** 🚀

_Prueba Técnica para GLOBTECx E.I.R.L._
