const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));

// Student Schema
const studentSchema = new mongoose.Schema({
  name:       String,
  age:        Number,
  course:     String,
  department: String,
});

const Student = mongoose.model("Student", studentSchema);

// GET - Test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// POST - Add student
app.post("/addstudent", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).json({ message: "Student Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// GET - View all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE - Delete student by ID
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => console.log("🚀 Server Started on port 5000"));