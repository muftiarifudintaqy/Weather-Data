import { Link } from "react-router-dom";

function Base() {
  return (
    <div>
      <h1>Base</h1>
      <Link to="/notes" className="btn-primary">
        To Notes App
      </Link>
      <Link to="/weather" className="btn-primary">
        To Weather App
      </Link>
    </div>
  );
}

export default Base;
