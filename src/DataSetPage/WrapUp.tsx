import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "./SelectedDataSetPage.module.css";
import styles from "./WrapUp.module.css";
import { isBefore } from "date-fns";
import { type CompanyDataSet, type CallLog } from "../DataSetData";

type currentCompany = {
  currentCompany: CompanyDataSet;
  accountDetailsChanged: boolean;
};

function WrapUp({ currentCompany, accountDetailsChanged }: currentCompany) {
  // Presentation state and data
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [notes, setNotes] = useState<string>("");
  const [pickedDate, setPickedDate] = useState<string>("");
  const [pickedTime, setPickedTime] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  // Date and time state and data
  const currentDate = new Date(); // The current IRL calendar date
  const [selected, setSelected] = useState<Date>(); // The date that the user picks on the date picker

  function closeDatePicker(): void {
    setDatePickerVisible((curr) => (curr = !curr));
  }

  function handleSaveAndLog(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault();
    switch (response) {
      case "Not In":
        createCallLog();
        break;
      case "Not Interested":
        createCallLog();
        break;
      case "Opportunity":
        if (pickedDate === "") {
          alert("Please pick a date");
          break;
        } else {
          createCallLog();
          break;
        }
      case "Call Back":
        if (pickedDate === "") {
          alert("Please pick a date");
          break;
        } else {
          createCallLog();
          break;
        }
      default:
        console.log("The rest havent been done yet");
        break;
    }
  }

  function handleOnlySaveAccount(): void {
    console.log("hello its me handleOnlySaveAccount");
  }

  function createCallLog(): void {
    let currentCallLog: CallLog;

    if (pickedDate === "") {
      currentCallLog = {
        contact: "default",
        currentCallDate: currentDate,
        responseType: response,
        notes: notes,
      };
    } else {
      currentCallLog = {
        contact: "default",
        currentCallDate: currentDate,
        appointmentCallDate: pickedDate,
        responseType: response,
        notes: notes,
      };
    }

    currentCompany.callLogs.push(currentCallLog);
    setNotes("");
  }

  function dateSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault();

    // if no date is picked close the calendar
    if (selected === undefined) {
      closeDatePicker();
      return;
    }

    // if no time is picked close the calendar
    if (pickedTime === "") {
      closeDatePicker();
      return;
    }

    if (isBefore(selected, currentDate)) {
      alert("Please pick a date and time that is after the current date");
      return;
    }

    const dDate: string = selected.toDateString();
    const newDate: string = `${dDate} ${pickedTime} GMT`;
    setPickedDate(newDate);

    closeDatePicker();
  }

  return (
    <div className={styles.contentdiv}>
      <div>
        <div className={styles.contentdiv_header}>Wrap up</div>
      </div>
      <form>
        {datePickerVisible ? (
          <>
            <div className={styles.formelement_submitbtn}>
              <button
                id={styles.submit}
                onClick={(e) => {
                  dateSubmit(e);
                }}
              >
                submit
              </button>
            </div>
            <div className={styles.formelement_time}>
              <input
                id={styles.time}
                type="time"
                value={pickedTime}
                onChange={(e) => setPickedTime(e.target.value)}
              />
            </div>
            <div className={styles.formelement_daypicker}>
              <DayPicker
                className={styles.rdp_root}
                animate
                navLayout="around"
                mode="single"
                selected={selected}
                onSelect={setSelected}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.wrapup_wrapper}>
              <div className={styles.wrapper}>
                <img
                  id={styles.calendarimage}
                  src="\src\images\calendar-icon.png"
                  onClick={() => {
                    setDatePickerVisible((curr) => (curr = !curr));
                  }}
                />
              </div>
              <div className={styles.wrapper}>
                <label>{pickedDate === "" ? "" : pickedDate}</label>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="response" id={styles.label_response}>
                    Response
                  </label>
                  <select
                    id={styles.dropdown_response}
                    name="reponse"
                    onChange={(e) => setResponse(e.target.value)}
                    value={response}
                  >
                    <option value="">--Select--</option>
                    <option value="Opportunity">Opportunity</option>
                    <option value="Call Back">Call Back</option>
                    <option value="Not In">Not in</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.formelement}>
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    rows={4}
                    cols={50}
                    maxLength={500}
                    value={notes}
                    name="date"
                    autoComplete="off"
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={styles.wrapper}>
                <button
                  id={styles.btn_save}
                  onClick={(e) => {
                    handleSaveAndLog(e);
                  }}
                  disabled={response === "" ? true : false}
                >
                  Save and Log
                </button>
                <button
                  id={styles.btn_saveacc}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOnlySaveAccount();
                  }}
                  disabled={accountDetailsChanged === false ? true : false}
                >
                  Only Save Account
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default WrapUp;
