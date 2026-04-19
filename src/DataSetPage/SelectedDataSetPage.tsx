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
import { useState } from "react";
import WrapUp from "./WrapUp";

type UserData = {
  userData: Contact;
};

function SelectedDataSetPage({ userData }: UserData) {
  function formatParam(dataset: string | undefined): CompanyDataSet[] {
    let dataSetType: CompanyDataSet[];
    switch (dataset) {
      case "house builders":
        dataSetType = [...houseBuilders];
        break;
      case "landscapers":
        dataSetType = [...landscapers];
        break;
      case "architects":
        dataSetType = [...architects];
        break;
      case "MEP":
        dataSetType = [...mepContractors];
        break;
      default:
        dataSetType = [...mepContractors];
    }

    return dataSetType;
  }

  function handleSetCompanyName(companyName: string) {
    setCompanyName(companyName);
  }

  function handleSetAddress(address: string) {
    setAddress(address);
  }

  function handleSetTown(town: string) {
    setTown(town);
  }

  function handleSetCounty(county: string) {
    setCounty(county);
  }

  function handleSetPostcode(postcode: string) {
    setPostcode(postcode);
  }

  function handleSetTelephone(telephone: string) {
    setTelephone(telephone);
  }

  function currentCompanyCallLogs(): void {
    console.log(selectedDataSet[0].callLogs);
  }

  const param = useParams();
  const selectedDataSet = formatParam(param.selectedData);
  const [companyName, setCompanyName] = useState<string>(
    selectedDataSet[0].companyName,
  );
  const [address, setAddress] = useState<string>(selectedDataSet[0].address);
  const [town, setTown] = useState<string>(selectedDataSet[0].town);
  const [county, setCounty] = useState<string>(selectedDataSet[0].county);
  const [postcode, setPostcode] = useState<string>(selectedDataSet[0].postcode);
  const [telephone, setTelephone] = useState<string>(
    selectedDataSet[0].telephone,
  );

  return (
    <div className="selecteddatasetpagemain-div">
      <AccountDetails
        companyName={companyName}
        address={address}
        town={town}
        county={county}
        postcode={postcode}
        telephone={telephone}
        handleSetCompanyName={handleSetCompanyName}
        handleSetAddress={handleSetAddress}
        handleSetTown={handleSetTown}
        handleSetCounty={handleSetCounty}
        handleSetPostcode={handleSetPostcode}
        handleSetTelephone={handleSetTelephone}
      />
      <WrapUp
        currentCompany={selectedDataSet}
        currentCompanyCallLogs={currentCompanyCallLogs}
      />
    </div>
  );
}

export default SelectedDataSetPage;
