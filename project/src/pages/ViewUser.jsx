import { useState, useEffect } from "react";
import "../styles/Viewuser.css";

function ViewUser() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const response = await fetch("https://student-management-system3-pskr.onrender.com/students");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      alert("Error fetching students. Is the server running?");
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    const confirm = window.confirm("Are you sure you want to delete this student?");
    if (!confirm) return;
    try {
      const response = await fetch(`https://student-management-system3-pskr.onrender.com/students/${id}`,{
    method: "DELETE",
    }
   );
      const data = await response.json();
      alert(data.message);
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      alert("Error deleting student.");
    }
  }

  return (
    <div className="viewuser-page">
      <div className="viewuser-container">
        <h1 className="viewuser-title">Students List</h1>

        {loading ? (
          <p className="viewuser-message">Loading students...</p>
        ) : students.length === 0 ? (
          <p className="viewuser-message">No students found. Add some students first!</p>
        ) : (
          <table className="student-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.department}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewUser;