import styles from "./EmployeeDetails.module.css";
import { type CompanyDataSet, type CallLog } from "../DataSetData";
import { type Contact } from "../LoginData";
import { useState } from "react";
import type React from "react";

type employeesDetailsProps = {
  selectedDataSet: CompanyDataSet[];
  currentRecord: number;
  currentEmployee: number;
  setCurrentEmployee: React.Dispatch<React.SetStateAction<number>>;
  mode: "view" | "new" | "history";
  setMode: React.Dispatch<React.SetStateAction<"view" | "new" | "history">>;
  handleDeleteEmployee: (employeeIndex: number) => void;
  handleUpdateEmployee: (employeeIndex: number, field: keyof Contact, value: string) => void;
  handleAddEmployee: (newEmployee: Contact) => void;
};

function CallHistoryTable({ callLogs }: { callLogs: CallLog[] }) {
  if (callLogs.length === 0) {
    return (
      <div className={styles.contentdiv_employees}>
        <p className={styles.p_employees}>No call logs</p>
      </div>
    );
  }

  return (
    <div className={styles.call_history_wrapper}>
      <table className={styles.call_history_table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Contact</th>
            <th>Response</th>
            <th>Notes</th>
            <th>Appointment</th>
          </tr>
        </thead>
        <tbody>
          {callLogs.map((log, i) => (
            <tr key={i}>
              <td>{new Date(log.currentCallDate).toLocaleDateString()}</td>
              <td>{log.contact}</td>
              <td>{log.responseType}</td>
              <td>{log.notes}</td>
              <td>{log.appointmentCallDate ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const emptyEmployee: Contact = {
  firstName: "",
  secondName: "",
  jobTitle: "",
  email: "",
  contactNumber: "",
};

function EmployeesDetails({
  selectedDataSet,
  currentRecord,
  currentEmployee,
  setCurrentEmployee,
  mode,
  setMode,
  handleDeleteEmployee,
  handleUpdateEmployee,
  handleAddEmployee,
}: employeesDetailsProps) {
  const [newEmployee, setNewEmployee] = useState<Contact>(emptyEmployee);
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSummarise() {
    setLoading(true);
    setSummary("");
    try {
      const res = await fetch("http://localhost:3001/api/summarise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ callLogs: selectedDataSet[currentRecord].callLogs }),
      });
      const data = await res.json();
      setSummary(data.summary ?? data.error ?? "Could not generate summary.");
    } catch {
      setSummary("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleDelete() {
    handleDeleteEmployee(currentEmployee);
    setCurrentEmployee((prev) => Math.max(prev - 1, 0));
  }

  function handleConfirmAdd() {
    handleAddEmployee(newEmployee);
    setCurrentEmployee(selectedDataSet[currentRecord].employees.length);
    setNewEmployee(emptyEmployee);
    setMode("view");
  }

  const employees = selectedDataSet[currentRecord].employees;
  const employee = employees[currentEmployee];

  return (
    <>
      {employees.length === 0 && mode === "view" ? (
        <div className={styles.contentdiv}>
          <div className={styles.contentdiv_header}>Employee Details</div>
          <div className={styles.mode_buttons}>
            <button
              type="button"
              className={mode === "view" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => setMode("view")}
            >
              View
            </button>
            <button
              type="button"
              className={mode === "new" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => setMode("new")}
            >
              New Employee
            </button>
            <button
              type="button"
              className={mode === "history" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => setMode("history")}
            >
              Call History
            </button>
          </div>
          <div className={styles.contentdiv_employees}>
            <p className={styles.p_employees}>No employees</p>
          </div>
        </div>
      ) : (
        <div className={styles.contentdiv}>
          <div className={styles.contentdiv_header}>Employee Details</div>
          <div className={styles.mode_buttons}>
            <button
              type="button"
              className={mode === "view" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => setMode("view")}
            >
              View
            </button>
            <button
              type="button"
              className={mode === "new" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => { setMode("new"); setNewEmployee(emptyEmployee); }}
            >
              New Employee
            </button>
            <button
              type="button"
              className={mode === "history" ? styles.mode_btn_active : styles.mode_btn}
              onClick={() => setMode("history")}
            >
              Call History
            </button>
          </div>

          {mode === "history" ? (
            <>
              <div className={styles.employeedetails_wrapper_button}>
                <button
                  type="button"
                  onClick={handleSummarise}
                  disabled={loading || selectedDataSet[currentRecord].callLogs.length === 0}
                >
                  {loading ? "Summarising..." : "Summarise Call History"}
                </button>
              </div>
              {summary && <p className={styles.summary}>{summary}</p>}
              <CallHistoryTable callLogs={selectedDataSet[currentRecord].callLogs} />
            </>
          ) : mode === "view" ? (
            <>
              <form>
                <div className={styles.employeedetails_wrapper}>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleUpdateEmployee(currentEmployee, "firstName", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="secondName">Second Name</label>
                      <input
                        id="secondName"
                        name="secondName"
                        value={employee.secondName}
                        onChange={(e) => handleUpdateEmployee(currentEmployee, "secondName", e.target.value)}
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
                        onChange={(e) => handleUpdateEmployee(currentEmployee, "jobTitle", e.target.value)}
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
                        onChange={(e) => handleUpdateEmployee(currentEmployee, "email", e.target.value)}
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
                        onChange={(e) => handleUpdateEmployee(currentEmployee, "contactNumber", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className={styles.employeedetails_wrapper_button}>
                <button
                  type="button"
                  onClick={() => setCurrentEmployee((prev) => Math.max(prev - 1, 0))}
                >
                  {"< Back"}
                </button>
                <label>
                  {currentEmployee + 1} /{" "}
                  {employees.length}
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentEmployee((prev) =>
                      Math.min(prev + 1, employees.length - 1)
                    )
                  }
                >
                  {"Forward >"}
                </button>
                <button type="button" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </>
          ) : (
            <>
              <form>
                <div className={styles.employeedetails_wrapper}>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="new_firstName">First Name</label>
                      <input
                        id="new_firstName"
                        value={newEmployee.firstName}
                        onChange={(e) => setNewEmployee((prev) => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="new_secondName">Second Name</label>
                      <input
                        id="new_secondName"
                        value={newEmployee.secondName}
                        onChange={(e) => setNewEmployee((prev) => ({ ...prev, secondName: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="new_jobTitle">Job Title</label>
                      <input
                        id="new_jobTitle"
                        value={newEmployee.jobTitle}
                        onChange={(e) => setNewEmployee((prev) => ({ ...prev, jobTitle: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="new_email">Email</label>
                      <input
                        id="new_email"
                        value={newEmployee.email}
                        onChange={(e) => setNewEmployee((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.formelement}>
                      <label htmlFor="new_contactNumber">Contact Number</label>
                      <input
                        id="new_contactNumber"
                        value={newEmployee.contactNumber}
                        onChange={(e) => setNewEmployee((prev) => ({ ...prev, contactNumber: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className={styles.employeedetails_wrapper_button}>
                <button type="button" onClick={handleConfirmAdd}>
                  Confirm
                </button>
                <button type="button" onClick={() => { setNewEmployee(emptyEmployee); setMode("view"); }}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default EmployeesDetails;
