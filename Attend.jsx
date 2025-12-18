import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", status: null },
  { id: 2, name: "Bob", status: null },
  { id: 3, name: "Charlie", status: null },
  { id: 4, name: "Diana", status: null }
];

export default function AttendanceTracker() {
  const [students, setStudents] = useState(initialStudents);

  const markAttendance = (id, status) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const presentCount = students.filter(s => s.status === "Present").length;
  const absentCount = students.filter(s => s.status === "Absent").length;

  return (
    <div style={styles.container}>
      <h2>📋 Attendance Tracker</h2>

      <p>
        Present: <strong>{presentCount}</strong> | Absent:{" "}
        <strong>{absentCount}</strong>
      </p>

      <ul style={styles.list}>
        {students.map(student => (
          <li key={student.id} style={styles.listItem}>
            <span>{student.name}</span>

            <div>
              <button
                style={{
                  ...styles.button,
                  backgroundColor:
                    student.status === "Present" ? "#4CAF50" : "#e0e0e0"
                }}
                onClick={() => markAttendance(student.id, "Present")}
              >
                Present
              </button>

              <button
                style={{
                  ...styles.button,
                  backgroundColor:
                    student.status === "Absent" ? "#f44336" : "#e0e0e0"
                }}
                onClick={() => markAttendance(student.id, "Absent")}
              >
                Absent
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px"
  },
  button: {
    marginLeft: "5px",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer"
  }
};
