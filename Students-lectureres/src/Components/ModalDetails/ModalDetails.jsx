import "./modalDetails.css";

const ModalDetails = (props) => {
  let student = props.findStudent(props.studentCard);
  console.log(student);

  return (
    <div className="modal-details">
      <button
        onClick={() => {
          props.closeModal(false);
        }}
      >
        Close
      </button>
      <h2>First Name: {student.firstName} </h2>
      <h2>Last Name: {student.lastName}</h2>
      <h2>Year of Birth: {student.yob} </h2>
      <h2>Index Number: {student.indexNum}</h2>
      <h2>Employed: {student.isEmployed ? "yes" : "no"}</h2>
      <h2>Started Uni:{student.startingDateOfUni}</h2>
    </div>
  );
};

export default ModalDetails;
