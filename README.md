# 🚀 Premium TODO Dashboard - React & Redux Toolkit

A high-performance, aesthetically pleasing, and feature-rich TODO application designed for productivity. This project serves as a comprehensive demonstration of **modern frontend architecture**, featuring complex state management, asynchronous side effects, and a persistent mock-backend integration.

---

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-000000?style=for-the-badge&logo=json&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## 🎯 Project Purpose

The primary goal of this project is to showcase a **scalable architectural pattern** for React applications. Unlike simple "hello world" todo lists, this app implements:
- **Centralized State**: Using Redux Toolkit to maintain a "single source of truth".
- **Real-world Persistence**: Simulating a RESTful backend with `json-server`.
- **Async Workflow**: Handling API latency and data fetching transitions with `createAsyncThunk`.
- **Modular Design**: Atomic component structure for maximum maintainability.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19 + Vite (for lightning-fast builds)
- **State Management**: Redux Toolkit (Slices, Thunks, and Middleware)
- **Networking**: Axios for robust HTTP requests
- **Mock Backend**: JSON Server (RESTful API simulation)
- **Styling**: Vanilla CSS with a focus on modern design principles (Gradients, Hover effects, Responsive layouts)

---

## 🚀 Getting Started

### 📦 Installation
```bash
git clone https://github.com/suleyman-konak/todo-app-react.git
cd todo-app-react
npm install
```

### ⚡ Quick Start (The "Easy" Way)
Run both the frontend and the backend simultaneously with one command:
```bash
npm start
```

### 🛠️ Manual Start (Control Everything)
If you prefer to run services in separate terminals:

**Terminal 1: Start the Mock Database (Port 5000)**
```bash
npx json-server db.json -p 5000
```

**Terminal 2: Start the React Development Server**
```bash
npm run dev
```

---

## 🗄️ Database & API Flow (How it works)

This app doesn't just store data in local storage; it uses a full **REST API flow**:

1. **The Source**: `db.json` acts as our high-speed local database.
2. **The Server**: `json-server` watches this file and exposes endpoints.
3. **The State**: Redux Thunks (`fetchTodos`, `addTodoAsync`, etc.) make `async/await` calls to these endpoints.
4. **The UI**: React components subscribe to the Redux state and automatically re-render when the database changes.

> [!IMPORTANT]
> Because `json-server` writes directly to `db.json`, your data persists even if you restart your computer or clear your browser cache!

---

## 📂 Project Structure

```text
TODO-Projesi/
├── src/
│   ├── components/      # Isolated UI components (TodoCreate, TodoList, Todo)
│   ├── redux/           # Redux logic (todos.jsx - Slice & Thunks)
│   ├── css/             # Modern styling system
│   ├── App.jsx          # Component orchestration
│   └── main.jsx         # Render entry point
├── db.json              # Mock Database
└── package.json         # Scripts and dependencies
```

---

## 📸 Snapshot of Code
### Async Thunk Integration
```javascript
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get("http://localhost:5000/todos");
    return response.data;
});
```

---

## 🤝 Contributing
Feel free to fork this project and submit a PR! Contributions to UI/UX improvements or adding more complex features are always welcome.
