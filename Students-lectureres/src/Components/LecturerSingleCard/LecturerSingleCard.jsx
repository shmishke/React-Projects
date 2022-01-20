import "./lecturerSingleCard.css";

const LecturerSingleCard = (props) => {
  return (
    <div className="lecturer-card">
      <h2>{`${props.e.firstName} ${props.e.lastName}`}</h2>
      <button
        onClick={() => {
          props.toggleLecturor(true);
          props.changeLecturorCard(props.index);
        }}
      >
        Show Details
      </button>
    </div>
  );
};

export default LecturerSingleCard;
