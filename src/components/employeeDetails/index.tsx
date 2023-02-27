import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Employee } from "../../types";
import Dialog from "../dialog";
const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    data: employee,
    error,
    isPending,
  } = useFetch(`${import.meta.env.VITE_APP_API_ROOT}/employees/` + id);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [employeeData, setEmployeeData] = useState<Employee | null>(null);

  const handleDialog = () => {
    setShow(true);
  };
  const handleClick = (val: any) => {
    fetch(`${import.meta.env.VITE_APP_API_ROOT}/${val.updatePath}/` + val.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="employee-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!!employee && (
        <div className="container">
          <h2>
            {employee.first_name} {employee.last_name}
          </h2>
          <p>Monthly salary: {employee.salary}</p>
          <div>created date: {employee.date}</div>
          <button
            onClick={() =>
              handleClick({ ...employee, updatePath: "employees" })
            }
          >
            delete
          </button>
          <button onClick={() => handleDialog()}>edit</button>
        </div>
      )}
      {show && <Dialog data={employee} />}
    </div>
  );
};

export default EmployeeDetails;
