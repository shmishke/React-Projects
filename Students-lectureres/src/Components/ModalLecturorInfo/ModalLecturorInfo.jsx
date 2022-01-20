import "./modalLecturorInfo.css";

const ModalLecturorInfo = (props) => {
  const lecturor = props.findLecturor(props.LecturorCard);
  console.log(lecturor);
  return (
    <div className="modal-details">
      <button
        onClick={() => {
          props.toggleModal(false);
        }}
      >
        Close{" "}
      </button>
      <h2>First Name: {lecturor.firstName} </h2>
      <h2>Last Name: {lecturor.lastName} </h2>
      <h2>Year of Birth: {lecturor.yob} </h2>
      <h2>Subject: {lecturor.subject} </h2>
    </div>
  );
};
export default ModalLecturorInfo;
