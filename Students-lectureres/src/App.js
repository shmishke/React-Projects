import { useEffect, useState } from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [newStudentAdded, toggleNewStudentAdded] = useState(false);

  useEffect(() => {
    fetch("https://61d588802b4f730017a828e5.mockapi.io/Students")
      .then((res) => res.json())
      .then((res) => setStudents(res));
    fetch("https://61d588802b4f730017a828e5.mockapi.io/lecturers")
      .then((res) => res.json())
      .then((res) => setLecturers(res));
  }, [newStudentAdded]);

  function findStudent(x) {
    return students.find((e, i) => {
      return i === x;
    });
  }
  function findLecturor(x) {
    return lecturers.find((e, i) => {
      return i === x;
    });
  }

  return (
    <HomePage
      students={students}
      lecturers={lecturers}
      findStudent={findStudent}
      findLecturor={findLecturor}
      newStudentAdded={newStudentAdded}
      toggleNewStudentAdded={toggleNewStudentAdded}
    />
  );
}

export default App;
