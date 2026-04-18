import "./SelectedDataSetPage.module.css";
import styles from "./AccountDetails.module.css";
import { useState } from "react";
import { type CompanyDataSet } from "../DataSetData";

type currentCompany = {
  currentCompany: CompanyDataSet;
  handleSetAccountDetailsChanged: (state: boolean) => void;
};

function AccountDetails({
  currentCompany,
  handleSetAccountDetailsChanged,
}: currentCompany) {
  const initCompanyName: string = companyName;
  const initAddress: string = address;
  const initTown: string = town;
  const initCounty: string = county;
  const initPostcode: string = postcode;
  const initTelephone: string = telephone;

  function compareCompanyDetails(attribue: string): void {
    switch (attribue) {
      case companyName:
        if (companyName == initCompanyName) {
          handleSetAccountDetailsChanged(true);
        }
        break;
      case address:
        if (address === initAddress) {
          handleSetAccountDetailsChanged(true);
        }
        break;
      case town:
        if (town === initTown) {
          handleSetAccountDetailsChanged(true);
        }
        break;
      case county:
        if (county === initCounty) {
          handleSetAccountDetailsChanged(true);
        }
        break;
      case postcode:
        if (postcode === initPostcode) {
          handleSetAccountDetailsChanged(true);
        }
        break;
      case telephone:
        if (telephone === initTelephone) {
          handleSetAccountDetailsChanged(true);
        }
        break;
    }
  }

  return (
    <div className={styles.contentdiv}>
      <div>
        <div className={styles.contentdiv_header}>Account Details</div>
      </div>
      <form>
        <div className={styles.formelement}>
          <label htmlFor="companyName">Company Name</label>
          <input
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="companyName"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="address"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="town">Town</label>
          <input
            value={town}
            onChange={(e) => {
              setTown(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="town"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="county">County</label>
          <input
            value={county}
            onChange={(e) => {
              setCounty(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="county"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="postcode">Postcode</label>
          <input
            value={postcode}
            onChange={(e) => {
              setPostcode(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="postcode"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles.formelement}>
          <label htmlFor="telephone">Telephone</label>
          <input
            value={telephone}
            onChange={(e) => {
              setTelephone(e.target.value);
              compareCompanyDetails(companyName);
            }}
            name="telephone"
            autoComplete="off"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default AccountDetails;
