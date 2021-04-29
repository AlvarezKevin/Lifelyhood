import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
// Don't touch this. I will fix it tomorrow
// Style
// form {
//   display: block;
//   position: relative;
// }

// form:after {
//   content: "";
//   display: block;
//   position: absolute;
//   top: -5px;
//   left: -5px;
//   right: -5px;
//   bottom: -5px;
//   z-index: 1;
//   background-image: linear-gradient(to bottom right, #ffce00, #fe4880);
// }

// form .form-inner {
//   position: relative;
//   display: block;
//   background-color: #fff;
//   padding: 30px;
//   z-index: 2;
// }

// form .form-inner h2 {
//   color: #888;
//   font-size: 28px;
//   font-weight: 500;
//   margin-bottom: 30px;
// }

// form .form-inner .form-group {
//   display: block;
//   width: 300px;
//   margin-bottom: 15px;
// }

// .form-inner .form-group label {
//   display: block;
//   color: #666;
//   font-size: 12px;
//   margin-bottom: 5px;
//   transition: 0.4s;
// }

// .form-inner .form-group:focus-within label {
//   color: #fe4880;
// }

// form .form-inner .form-group input {
//   display: block;
//   width: 100;
//   padding: 10px 15px;
//   background-color: #f8f8f8;
//   border-radius: 8px;
//   transition: 0.4s;
// }

// form .form-inner .form-group input:focus {
//   box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
// }

// form .form-inner input[type="submit"] {
//   display: inline-block;
//   padding: 10px;
//   border-radius: 8px;
//   background-image: linear-gradient(
//     to right,
//     #ffce00 50%,
//     #ffce00 50%,
//     #fe4880
//   );
//   background-size: 200%;
//   background-position: 0;
//   transition: 0.4s;
//   color: #fff;
//   font-weight: 700;
//   cursor: pointer;
// }

// form .form-inner input[type="submit"]:hover {
//   background-position: 100% 0%;
// }
