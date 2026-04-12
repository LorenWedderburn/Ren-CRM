function WrapUp() {
  return (
    <div className="selecteddataset-contentdiv selecteddataset-wrapup">
      <div>
        <div className="selecteddatasetpagemain-contentdiv-header">Wrap up</div>
      </div>
      <form>
        <div className="selecteddatasetpagemain-formelement">
          <label htmlFor="date">Date:</label>
          <input value={""} name="date" autoComplete="off"></input>
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
