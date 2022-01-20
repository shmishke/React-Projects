import "./header.css";

const Header = (props) => {
  return (
    <div className="hdr">
      <div className="logo">
        <h1>BIT</h1>
      </div>
      <button
        onClick={() => {
          props.toggleModal(true);
        }}
      >
        Add New Student
      </button>
    </div>
  );
};

export default Header;
