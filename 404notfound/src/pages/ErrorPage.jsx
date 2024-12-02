import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="error-page">
      <h1>{error.status}</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/" className="btn-primary">
        Go to home
      </Link>
    </div>
  );
}

export default ErrorPage;
