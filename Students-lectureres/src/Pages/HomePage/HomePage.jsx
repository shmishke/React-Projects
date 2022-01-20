import { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import LecturerSingleCard from "../../Components/LecturerSingleCard/LecturerSingleCard.jsx";
import ModalAddStudent from "../../Components/ModalAddStudent/ModalAddStudent.jsx";
import ModalDetails from "../../Components/ModalDetails/ModalDetails.jsx";
import ModalLecturorInfo from "../../Components/ModalLecturorInfo/ModalLecturorInfo.jsx";
import StudentSingleCard from "../../Components/StudentSingleCard/StudentSingleCard.jsx";
import "./homePage.css";

const HomePage = (props) => {
  const [showModal, toggle] = useState(false);
  const [showModalLecturor, toggleLecturor] = useState(false);
  const [showModalAdd, toggleModalAdd] = useState(false);
  const [studentCard, changeStudentCard] = useState(-1);
  const [LecturorCard, changeLecturorCard] = useState(-1);
  return (
    <>
      {showModal && (
        <div className="modal-students">
          <ModalDetails
            closeModal={toggle}
            findStudent={props.findStudent}
            studentCard={studentCard}
          />
        </div>
      )}
      <Header toggleModal={toggleModalAdd} />
      <h2>Students:</h2>
      <div className="students">
        {props.students.map((e, i) => {
          return (
            <div className="students-card">
              <StudentSingleCard
                e={e}
                toggleModal={toggle}
                changeStudentCard={changeStudentCard}
                index={i}
                findStudent={props.findStudent}
              />
            </div>
          );
        })}
      </div>
      <h2>Lecturers</h2>
      <div className="lecturers">
        {props.lecturers.map((e, i) => {
          return (
            <div className="lecturers-card">
              <LecturerSingleCard
                e={e}
                index={i}
                changeLecturorCard={changeLecturorCard}
                toggleLecturor={toggleLecturor}
              />
            </div>
          );
        })}
      </div>
      {showModalLecturor && (
        <div className="modal-lecturor">
          <ModalLecturorInfo
            toggleModal={toggleLecturor}
            findLecturor={props.findLecturor}
            LecturorCard={LecturorCard}
          />
        </div>
      )}
      {showModalAdd && (
        <div className="modal-add">
          <ModalAddStudent
            toggleModal={toggleModalAdd}
            newStudentAdded={props.newStudentAdded}
            toggleNewStudentAdded={props.toggleNewStudentAdded}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
