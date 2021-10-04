import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import './style.scss';

export default function RegisterForm() {

  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const validatePassword = (e) => {
    setPassword(e.target.value);

    let letter = document.querySelector('.letter');
    let capital = document.querySelector('.capital');
    let number = document.querySelector('.number');
    let length = document.querySelector('.length');

    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (e.target.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    };

    // Validate capital letters 
    let UpperCaseLetters = /[A-Z]/g;
    if (e.target.value.match(UpperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    };

    // Validate numbers
    let numbers = /[0-9]/g;
    if (e.target.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    };

    // Validate length 
    if (e.target.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    };
  };

  return (
    <div className="register-form p-3">
      <h5 className="text-center">Click on Password Field to see password validation</h5>
      <form className="w-75 mx-auto mt-3 border bg-light px-5 py-4">
        <h2 className="mb-4 text-center">Register Form</h2>
        <div className="input-group mb-4">
          <i className="input-group-text">
            <Icon.PersonFill />
          </i>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
            required
          />
        </div>
        <div className="input-group mb-4">
          <i className="input-group-text">
            <Icon.EnvelopeFill />
          </i>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required
          />
        </div>
        <div className="input-group mb-2">
          <i className="input-group-text">
            <Icon.KeyFill />
          </i>
          <input
            type="password"
            placeholder="Password"
            className="form-control password"
            value={password}
            onChange={validatePassword}
            required
            onFocus={() => {
              document.querySelector('.message').classList.remove('d-none');
            }}
            onBlur={() => {
              document.querySelector('.message').classList.add('d-none');
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="checkbox"
            className="me-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.querySelector('.password').type = (document.querySelector('.password').type === "password" ? "text" : "password");
            }}
          />
          Show Password
        </div>
        <input
          type="submit"
          value="Register"
          className="d-flex mx-auto"
        />
      </form>
      <div className="mt-4 ms-4 message d-none">
        <h3 className="text-center">Password must contain the following:</h3>
        <p className="invalid letter">A <b>lowercase</b> letter</p>
        <p className="invalid capital">A <b>capital (uppercase)</b> letter</p>
        <p className="invalid number">A <b>number</b></p>
        <p className="invalid length">Minimum <b>8 characters</b></p>
      </div>
    </div>
  );
};