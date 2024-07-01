import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/update/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function formSubmissionHandler(e) {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      age,
    };
    axios
      .patch("http://localhost:4000/update/" + id, updatedData)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  }

  return (
    <div className="bg-warning d-flex flex-column justify-content-center align-items-center vh-100  w-100  ">
      <h1 className="text-dark">Update User</h1>
      <form
        className="d-flex flex-column
      justify-content-center align-items-left gap-2 w-75 border border-secondary p-4 rounded-1 bg-white"
        onSubmit={formSubmissionHandler}
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
