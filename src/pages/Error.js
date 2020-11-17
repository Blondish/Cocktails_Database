import React from "react";
import { Link } from 'react-router-dom';

export default function Error() {
  return <section className="error-page section">
    <div className="error-container">
      <h1>Oops!... its a Dead End</h1>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>

  </section>;
}
