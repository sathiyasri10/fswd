import { useState } from "react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (!taskText.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskText }]);
    setTaskText("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>📝 Task Dashboard</h2>

        <div style={styles.inputRow}>
          <input
            style={styles.input}
            placeholder="Enter a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button style={styles.addBtn} onClick={addTask}>
            Add
          </button>
        </div>

        {tasks.length === 0 && (
          <p style={styles.empty}>No tasks yet. Add one ☝️</p>
        )}

        <ul style={styles.list}>
          {tasks.map(task => (
            <li key={task.id} style={styles.taskItem}>
              <span>{task.text}</span>
              <button
                style={styles.deleteBtn}
                onClick={() => removeTask(task.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        <p style={styles.footer}>
          Total Tasks: <strong>{tasks.length}</strong>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #38bdf8, #6366f1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "25px",
    width: "380px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#4f46e5"
  },
  inputRow: {
    display: "flex",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #c7d2fe",
    outline: "none"
  },
  addBtn: {
    marginLeft: "8px",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "#ffffff",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  taskItem: {
    background: "#eef2ff",
    borderRadius: "8px",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#1e1b4b"
  },
  deleteBtn: {
    border: "none",
    background: "#ef4444",
    color: "#ffffff",
    borderRadius: "6px",
    padding: "5px 8px",
    cursor: "pointer"
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "10px"
  },
  footer: {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "14px",
    color: "#374151"
  }
};
