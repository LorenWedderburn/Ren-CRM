import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "./SelectedDataSetPage.module.css";
import styles from "./WrapUp.module.css";
import { isBefore } from "date-fns";

function WrapUp() {
  // Presentation state and data
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [notes, setNotes] = useState<string>("");

  // Date and time state and data
  const currentDate = new Date(); // The current IRL calendar date
  const [selected, setSelected] = useState<Date>(); // The date that the user picks on the date picker
  const [pickedDate, setPickedDate] = useState<string>("");
  const [pickedTime, setPickedTime] = useState<string>("");

  function CloseDatePicker(): void {
    setDatePickerVisible((curr) => (curr = !curr));
  }

  function handleSaveAndLog(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault();
    console.log("its me handle save and log");
  }

  function DateSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault();
    console.log(currentDate);
    console.log(selected);
    console.log(pickedTime);

    // if no date is picked close the calendar
    if (selected === undefined) {
      CloseDatePicker();
      return;
    }

    // if no time is picked close the calendar
    if (pickedTime === "") {
      CloseDatePicker();
      return;
    }

    if (isBefore(selected, currentDate)) {
      alert("Please pick a date and time that is after the current date");
      return;
    }

    const dDate: string = selected.toDateString();
    const newDate: string = `${dDate}, ${pickedTime}`;
    setPickedDate(newDate);
    console.log(newDate);

    CloseDatePicker();
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
                  DateSubmit(e);
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
                  <select id={styles.dropdown_response} name="reponse">
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
                >
                  Save and Log
                </button>
                <button
                  id={styles.btn_saveacc}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Save Account");
                  }}
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
