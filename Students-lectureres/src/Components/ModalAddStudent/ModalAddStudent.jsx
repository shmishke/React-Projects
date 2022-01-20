import { useState } from "react";
import "./modalAddStudent.css";

const ModalAddStudent = (props) => {
  const [firstName, changeFirstName] = useState("");
  const [indexNum, changeIndexNum] = useState(0);
  const [isEmployed, changeIsEmployed] = useState(false);
  const [lastName, changeLastName] = useState("");
  const [startingDateOfUni, changeStartingDateOfUni] = useState(0);
  const [yob, changeYob] = useState(0);

  const addStudent = () => {
    fetch("https://61d588802b4f730017a828e5.mockapi.io/Students", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        indexNum: indexNum,
        isEmployed: isEmployed,
        lastName: lastName,
        startingDateOfUni: startingDateOfUni,
        yob: yob,
      }),
    }).then(() => {
      props.toggleNewStudentAdded(!props.newStudentAdded);
      props.toggleModal(false);
      console.log("prosloo");
    });
  };

  return (
    <div className="modal-details">
      <button
        onClick={() => {
          props.toggleModal(false);
        }}
      >
        Close
      </button>
      <div className="inputi">
        <h3>First Name:</h3>
        <input
          required
          type="text"
          onChange={(event) => changeFirstName(event.target.value)}
        />
      </div>
      <div className="inputi">
        <h3>Last Name:</h3>
        <input
          required
          type="text"
          onChange={(event) => changeLastName(event.target.value)}
        />
      </div>
      <div className="inputi">
        <h3>Index Number:</h3>
        <input
          required
          type="text"
          onChange={(event) => changeIndexNum(event.target.value)}
        />
      </div>
      <div className="inputi">
        <h3>Are you employed?</h3>
        <input
          required
          type="text"
          onChange={(event) => changeIsEmployed(event.target.value)}
        />
      </div>
      <div className="inputi">
        <h3>Starting Date of Uni?</h3>
        <input
          required
          type="text"
          onChange={(event) => changeStartingDateOfUni(event.target.value)}
        />
      </div>
      <div className="inputi">
        <h3>Year of Birth?</h3>
        <input
          required
          type="text"
          onChange={(event) => changeYob(event.target.value)}
        />
      </div>
      <button onClick={addStudent}>Create</button>
    </div>
  );
};

export default ModalAddStudent;
