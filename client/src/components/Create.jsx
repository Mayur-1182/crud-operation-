import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(email, name, age);
    axios
      .post("http://localhost:4000/create", { name, email, age })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate("/");
    setAge("");
    setEmail("");
    setName("");
  }

  return (
    <div className="bg-primary d-flex flex-column justify-content-center align-items-center vh-100  w-100 border border-primary ">
      <h1 className="text-white">Add User</h1>
      <form
        className="d-flex flex-column
      justify-content-center align-items-left gap-2 w-75 border border-secondary p-4 rounded-1 bg-white"
        onSubmit={formSubmitHandler}
      >
        <div className="m-2 d-flex flex-column gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-2 d-flex flex-column">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="m-2 d-flex flex-column">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
