import { useState } from "react";
import "../styles/Adduser.css";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    department: "",
  });

  
  function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]:
      e.target.name === "age"
        ? Number(e.target.value)
        : e.target.value,
  });
}

 async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://student-management-system3-pskr.onrender.com/addstudent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert(data.message);

      setFormData({
        name: "",
        age: "",
        course: "",
        department: "",
      });
    } else {
      alert(data.message || "Failed to add student");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong.");
  }
}

  return (
    <div className="adduser-page">
      <div className="adduser-card">
        <h1 className="adduser-title">Add Student</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter department"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddUser;