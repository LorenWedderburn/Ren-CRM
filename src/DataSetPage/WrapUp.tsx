import { useState } from "react";
import { DayPicker } from "react-day-picker";

function WrapUp() {
  const [selected, setSelected] = useState<Date>();
  // const defaultClassNames = getDefaultClassNames();

  return (
    <div className="selecteddataset-contentdiv selecteddataset-wrapup">
      <div>
        <div className="selecteddatasetpagemain-contentdiv-header">Wrap up</div>
      </div>
      <form>
        <div className="selecteddatasetpagemain-formelement">
          <DayPicker
            className="rdp-root"
            animate
            navLayout="around"
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
              selected
                ? `Selected: ${selected.toLocaleDateString()}`
                : "Pick a day"
            }
          />
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="response">Response:</label>
          <select id="response" name="reponse">
            <option value="Opportunity">Opportunity</option>
            <option value="Call Back">Call Back</option>
            <option value="Not In">Not in</option>
            <option value="Not Interested">Not Interested</option>
          </select>
        </div>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="notes">Notes</label>
          <textarea
            rows={4}
            cols={50}
            value={""}
            name="date"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="selecteddataset-wrapupbtndiv">
          <button>Save and Log</button>
          <button>Only Save Account</button>
        </div>
      </form>
    </div>
  );
}

export default WrapUp;
