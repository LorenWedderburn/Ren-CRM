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

type SelectedDataSetPageProps = {};

function SelectedDataSetPage(props: SelectedDataSetPageProps) {
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

  function handleSetCompanyName(changedCompanyName: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          companyName: changedCompanyName,
        };
      }
    });
    setCompanyName(updatedRecord[currentRecord].companyName);
    setSelectedDataSet(updatedRecord);
    //handleSelectedDataSet(updatedRecord);
  }

  function handleSetAddress(changedAddress: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          address: changedAddress,
        };
      }
    });
    setAddress(updatedRecord[currentRecord].address);
    setSelectedDataSet(updatedRecord);
    //handleSelectedDataSet(updatedRecord);
  }

  function handleSetTown(town: string) {
    setSelectedDataSet(updatedRecord);
  }

  function handleSetCounty(county: string) {
    setSelectedDataSet(updatedRecord);
  }

  function handleSetPostcode(postcode: string) {
    setSelectedDataSet(updatedRecord);
  }

  function handleSetTelephone(telephone: string) {
    setSelectedDataSet(updatedRecord);
  }

  function handleSetCurrentRecord(record: number) {
    setCurrentRecord((curr) => curr + record);
  }

  function handleOnlySaveAccount(): void {
    if (selectedDataSet === undefined) return;
    debugger;
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          companyName: companyName,
          address: address,
          town: town,
          county: county,
          postcode: postcode,
          telephone: telephone,
          employees: employees,
        };
      }
    });

    // handleSelectedDataSet(updatedRecord);
    setSelectedDataSet(updatedRecord);
    setCurrentRecord((c) => c + 1);
    updateState();
    console.log(currentRecord);
  }

  function updateState(): void {
    setCompanyName(selectedDataSet[currentRecord + 1].companyName);
    setAddress(selectedDataSet[currentRecord + 1].address);
    setTown(selectedDataSet[currentRecord + 1].town);
    setCounty(selectedDataSet[currentRecord + 1].county);
    setPostcode(selectedDataSet[currentRecord + 1].postcode);
    setTelephone(selectedDataSet[currentRecord + 1].telephone);
    console.log(companyName);
  }

  const [currentRecord, setCurrentRecord] = useState<number>(0);
  const param = useParams();
  const pickedDataSet = formatParam(param.selectedData);

  const [selectedDataSet, setSelectedDataSet] = useState(pickedDataSet);
  //handleSelectedDataSet(pickedDataSet);
  const id = selectedDataSet[currentRecord].id;
  const [companyName, setCompanyName] = useState<string>(
    selectedDataSet[currentRecord].companyName,
  );
  const [address, setAddress] = useState<string>(
    selectedDataSet[currentRecord].address,
  );
  const [town, setTown] = useState<string>(selectedDataSet[currentRecord].town);
  const [county, setCounty] = useState<string>(
    selectedDataSet[currentRecord].county,
  );
  const [postcode, setPostcode] = useState<string>(
    selectedDataSet[currentRecord].postcode,
  );
  const [telephone, setTelephone] = useState<string>(
    selectedDataSet[currentRecord].telephone,
  );
  const [employees, setEmployees] = useState();
  //const [callLogs, setCallLogs] = useState(selectedDataSet[0].callLogs);

  return (
    <div className="selecteddatasetpagemain-div">
      <AccountDetails
        currentDataSet={selectedDataSet}
        currentRecord={currentRecord}
        companyName={companyName}
        // address={address}
        // town={town}
        // county={county}
        // postcode={postcode}
        // telephone={telephone}
        handleSetCompanyName={handleSetCompanyName}
        handleSetAddress={handleSetAddress}
        handleSetTown={handleSetTown}
        handleSetCounty={handleSetCounty}
        handleSetPostcode={handleSetPostcode}
        handleSetTelephone={handleSetTelephone}
      />
      <WrapUp
        currentDataSet={selectedDataSet}
        handleOnlySaveAccount={handleOnlySaveAccount}
        companyName={companyName}
        address={address}
        town={town}
        county={county}
        postcode={postcode}
        telephone={telephone}
        currentRecord={currentRecord}
        handleSetCompanyName={handleSetCompanyName}
        handleSetAddress={handleSetAddress}
        handleSetTown={handleSetTown}
        handleSetCounty={handleSetCounty}
        handleSetPostcode={handleSetPostcode}
        handleSetTelephone={handleSetTelephone}
        handleSetCurrentRecord={handleSetCurrentRecord}
      />
    </div>
  );
}

export default SelectedDataSetPage;
