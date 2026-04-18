import "./SelectedDataSetPage.module.css";
import AccountDetails from "./AccountDetails";
import { type Contact } from "../LoginData";
import { useParams } from "react-router";
import { type CompanyDataSet } from "../DataSetData";
import {
  mepContractors,
  architects,
  houseBuilders,
  landscapers,
} from "../DataSetData";
import WrapUp from "./WrapUp";
import { useState } from "react";

type UserData = {
  userData: Contact;
};

function SelectedDataSetPage({ userData }: UserData) {
  const [companyName, setCompanyName] = useState<string>(
    currentCompany.companyName,
  );
  const [address, setAddress] = useState<string>(currentCompany.address);
  const [town, setTown] = useState<string>(currentCompany.town);
  const [county, setCounty] = useState<string>(currentCompany.county);
  const [postcode, setPostcode] = useState<string>(currentCompany.postcode);
  const [telephone, setTelephone] = useState<string>(currentCompany.telephone);

  const [accountDetailsChanged, setAccountDetailsChanged] = useState(false);

  function handleSetAccountDetailsChanged(state: boolean): void {
    console.log(`hello ${state}`);
    setAccountDetailsChanged(state);
  }

  function formatParam(dataset: string | undefined): CompanyDataSet {
    let dataSetType: CompanyDataSet;
    switch (dataset) {
      case "house builders":
        dataSetType = houseBuilders[0];
        break;
      case "landscapers":
        dataSetType = landscapers[0];
        break;
      case "architects":
        dataSetType = architects[0];
        break;
      case "MEP":
        dataSetType = mepContractors[0];
        break;
      default:
        dataSetType = mepContractors[0];
    }

    return dataSetType;
  }

  const param = useParams();
  const selectedDataSet = formatParam(param.selectedData);

  function setCurrentCompanyName(event: string): string {
    selectedDataSet.companyName = event;
    return selectedDataSet.companyName;
  }

  return (
    <div className="selecteddatasetpagemain-div">
      <AccountDetails
        currentCompany={selectedDataSet}
        companyName={companyName}
        address={address}
        town={town}
        county={county}
        postcode={postcode}
        telephone={telephone}
        setCompanyName={setCompanyName}
        handleSetAccountDetailsChanged={handleSetAccountDetailsChanged}
      />
      <WrapUp
        currentCompany={selectedDataSet}
        accountDetailsChanged={accountDetailsChanged}
      />
    </div>
  );
}

export default SelectedDataSetPage;
