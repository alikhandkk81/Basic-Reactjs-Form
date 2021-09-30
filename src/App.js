import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [submited, setSubmited] = useState(false);
  const [valid, setvalid] = useState(true);
  if (values.firstName && values.lastname && values.email) {
    setvalid(true);
  }
  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submited && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          id="first-name"
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submited && !values.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          id="last-name"
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submited && !values.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          id="email"
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submited && !values.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
