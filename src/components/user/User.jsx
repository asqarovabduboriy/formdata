import React, { useState } from "react";
import "./User.css";
import Product from "../product/Product";
import { toast } from "react-toastify";

const User = () => {
  const API_URL = "http://localhost:3001/users";
  const [reload, setReload] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData.entries());

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(() => {
        setReload((p) => !p); 
        e.target.reset();
      });
      toast.success("user created successfully");
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">User create</h1>

        <form onSubmit={handlesubmit} className="form_user">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              required
            />
          </div>

          <div className="form-group">
            <label>age</label>
            <input
              name="age"
              type="number"
              className="form-control"
              id="inputEmail"
              placeholder="age"
              required
            />
          </div>
          <label>Gander</label>
          <div className="form-group_user">
            <select name="gander">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <Product />
    </>
  );
};

export default User;
