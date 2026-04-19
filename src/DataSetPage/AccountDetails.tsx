import "./SelectedDataSetPage.module.css";
import styles from "./AccountDetails.module.css";
import { type CompanyDataSet } from "../DataSetData";
//import styles from "./WrapUp.module.css";

type AccountDetailsDataset = {
  currentDataSet: CompanyDataSet[];
  currentRecord: number;
  // companyName: string;
  // address: string;
  // town: string;
  // county: string;
  // postcode: string;
  // telephone: string;
  handleSetCompanyName: (value: string) => void;
  handleSetAddress: (value: string) => void;
  handleSetTown: (value: string) => void;
  handleSetCounty: (value: string) => void;
  handleSetPostcode: (value: string) => void;
  handleSetTelephone: (value: string) => void;
};

function AccountDetails({
  currentDataSet,
  currentRecord,
  // companyName,
  // address,
  // town,
  // county,
  // postcode,
  // telephone,
  handleSetCompanyName,
  handleSetAddress,
  handleSetTown,
  handleSetCounty,
  handleSetPostcode,
  handleSetTelephone,
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
            value={currentDataSet[currentRecord].companyName}
            onChange={(e) => handleSetCompanyName(e.target.value)}
            name="companyName"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="address">Address</label>
          <input
            value={currentDataSet[currentRecord].address}
            onChange={(e) => handleSetAddress(e.target.value)}
            name="address"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="town">Town</label>
          <input
            value={currentDataSet[currentRecord].town}
            onChange={(e) => handleSetTown(e.target.value)}
            name="town"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="county">County</label>
          <input
            value={currentDataSet[currentRecord].county}
            onChange={(e) => handleSetCounty(e.target.value)}
            name="county"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="postcode">Postcode</label>
          <input
            value={currentDataSet[currentRecord].postcode}
            onChange={(e) => handleSetPostcode(e.target.value)}
            name="postcode"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="telephone">Telephone</label>
          <input
            value={currentDataSet[currentRecord].telephone}
            onChange={(e) => handleSetTelephone(e.target.value)}
            name="telephone"
            autoComplete="off"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
