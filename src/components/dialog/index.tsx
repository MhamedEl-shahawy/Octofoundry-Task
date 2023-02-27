import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../types";
import useForm from "../../hooks/useForm";

type DialogType = {
  data: Employee;
};
const Dialog = ({ data }: DialogType) => {
  const navigate = useNavigate();
  const initialState = {
    first_name: data?.first_name,
    last_name: data?.last_name,
    country: data?.country,
    salary: data?.salary,
  };
  const [values, setValues] = useForm(initialState);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_APP_API_ROOT}/employees/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, email: data?.email, date: data?.date }),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e) => handleUpdate(e)}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Your name.."
            onChange={setValues}
            defaultValue={values.first_name}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Your last name.."
            onChange={setValues}
            defaultValue={values.last_name}
          />

          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            defaultValue={values.country}
            onChange={setValues}
          >
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="egypt">Egypt</option>
            <option value="germany">Germany</option>
          </select>
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            defaultValue={values.salary}
            placeholder="Your  salary.."
            min="0"
            onChange={setValues}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Dialog;
