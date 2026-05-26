import "./SelectedDataSetPage.module.css";
import styles from "./AccountDetails.module.css";
import { type CompanyDataSet } from "../DataSetData";

type AccountDetailsDataset = {
  selectedDataSet: CompanyDataSet[];
  currentRecord: number;
  handleUpdateRecord: (field: keyof CompanyDataSet, value: string) => void;
  handleSetCurrentRecord: (record: number) => void;
};

function AccountDetails({
  selectedDataSet,
  currentRecord,
  handleUpdateRecord,
  handleSetCurrentRecord,
}: AccountDetailsDataset) {
  return (
    <div className={styles.contentdiv}>
      <div>
        <div className={styles.contentdiv_header}>Account Details</div>
      </div>
      <form>
        <div className={styles.formelement}>
          <label htmlFor="companyName">Company Name</label>
          <input
            value={selectedDataSet[currentRecord].companyName}
            onChange={(e) => handleUpdateRecord("companyName", e.target.value)}
            name="companyName"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="address">Address</label>
          <input
            value={selectedDataSet[currentRecord].address}
            onChange={(e) => handleUpdateRecord("address", e.target.value)}
            name="address"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="town">Town</label>
          <input
            value={selectedDataSet[currentRecord].town}
            onChange={(e) => handleUpdateRecord("town", e.target.value)}
            name="town"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="county">County</label>
          <input
            value={selectedDataSet[currentRecord].county}
            onChange={(e) => handleUpdateRecord("county", e.target.value)}
            name="county"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="postcode">Postcode</label>
          <input
            value={selectedDataSet[currentRecord].postcode}
            onChange={(e) => handleUpdateRecord("postcode", e.target.value)}
            name="postcode"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="telephone">Telephone</label>
          <input
            value={selectedDataSet[currentRecord].telephone}
            onChange={(e) => handleUpdateRecord("telephone", e.target.value)}
            name="telephone"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.navigation_btns}>
          <button type="button" onClick={() => handleSetCurrentRecord(-1)}>
            {"< Back"}
          </button>
          <button type="button" onClick={() => handleSetCurrentRecord(1)}>
            {"Forward >"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
