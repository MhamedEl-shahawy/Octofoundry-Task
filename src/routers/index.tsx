import { Routes, Route, Navigate } from "react-router-dom";
import EmployeesPage from "../views/employeesPage";
import NotFound from "../components/notFound";
import EmployeeDetails from "../components/employeeDetails";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default AppRouter;
