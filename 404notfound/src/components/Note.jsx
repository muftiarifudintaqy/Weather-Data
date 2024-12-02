import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Note({ title, content, to, onEdit, onDelete, isWrap = true }) {
  return (
    <div className="note">
      <h2>{title}</h2>
      <p className={isWrap ? "text-wrap" : ""}>{content}</p>
      {isWrap && (
        <div>
          <Link to={to} className="btn-primary">
            {" "}
            View
          </Link>
          <button type="button" className="btn-secondary" onClick={onEdit}>
            Edit
          </button>
          <button type="button" className="btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isWrap: PropTypes.bool,
};

export default Note;
