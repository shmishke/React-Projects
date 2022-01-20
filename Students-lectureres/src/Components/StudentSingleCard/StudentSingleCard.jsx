import "./studentSingleCard.css";

const StudentSingleCard = (props) => {
  return (
    <div className="student-card">
      <h2>{`${props.e.firstName} ${props.e.lastName}`}</h2>
      <button
        onClick={() => {
          const student = props.findStudent(props.index);
          student.isEmployed = !student.isEmployed;
        }}
      >
        Change Employ Status
      </button>
      <button
        onClick={() => {
          props.toggleModal(true);
          props.changeStudentCard(props.index);
        }}
      >
        Show Details
      </button>
    </div>
  );
};

export default StudentSingleCard;
