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
    name: data?.name,
    country: data?.country,
    salary: data?.salary,
    phone: data?.phone,
    company: data?.company,
  };
  const [values, setValues] = useForm(initialState);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_APP_API_ROOT}/employees/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, date: data?.date }),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={(e) => handleUpdate(e)}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            onChange={setValues}
            defaultValue={values.name}
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company name.."
            onChange={setValues}
            defaultValue={values.company}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your  phone.."
            onChange={setValues}
            defaultValue={values.phone}
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
