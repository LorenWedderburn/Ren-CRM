import styles from "./EmployeeDetails.module.css";
import { type CompanyDataSet } from "../DataSetData";
import { useState } from "react";

type employeesDetailsProps = {
  selectedDataSet: CompanyDataSet[];
  currentRecord: number;
  handleDeleteEmployee: (employeeIndex: number) => void;
};

function EmployeesDetails({
  selectedDataSet,
  currentRecord,
  handleDeleteEmployee,
}: employeesDetailsProps) {
  const [currentEmployee, setCurrentEmployee] = useState(0);

  function handleDelete() {
    handleDeleteEmployee(currentEmployee);
    setCurrentEmployee((prev) => Math.max(prev - 1, 0));
  }

  const employees = selectedDataSet[currentRecord].employees;
  const employee = employees[currentEmployee];

  return (
    <>
      {employees.length === 0 ? (
        <div className={styles.contentdiv}>
          <div className={styles.contentdiv_header}>Employee Details</div>
          <p>No employees</p>
        </div>
      ) : (
        <div className={styles.contentdiv}>
          <div className={styles.contentdiv_header}>Employee Details</div>
          <form>
            <div className={styles.employeedetails_wrapper}>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="contactName">Contact Name</label>
                  <input
                    id="contactName"
                    name="contactName"
                    value={`${employee.firstName} ${employee.secondName}`}
                    readOnly
                  />
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    id="jobTitle"
                    name="jobTitle"
                    value={employee.jobTitle}
                    readOnly
                  />
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={employee.email}
                    readOnly
                  />
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    value={employee.contactNumber}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </form>
          <div className={styles.employeedetails_wrapper_button}>
            <button
              type="button"
              onClick={() =>
                setCurrentEmployee((prev) => Math.max(prev - 1, 0))
              }
            >
              {"< Back"}
            </button>
            <label>
              {currentEmployee + 1} /{" "}
              {selectedDataSet[currentRecord].employees.length}
            </label>
            <button
              type="button"
              onClick={() =>
                setCurrentEmployee((prev) =>
                  Math.min(
                    prev + 1,
                    selectedDataSet[currentRecord].employees.length - 1,
                  ),
                )
              }
            >
              {"Forward >"}
            </button>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeesDetails;
