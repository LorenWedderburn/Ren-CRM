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
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          companyName: companyName,
        };
      }
    });
    console.log("Hello");
    setCompanyName(companyName);
  }

  function handleSetAddress(floop: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          address: floop,
        };
      }
    });

    setSelectedDataSet(updatedRecord);
  }

  function handleSetTown(town: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          town: town,
        };
      }
    });

    setSelectedDataSet(updatedRecord);
  }

  function handleSetCounty(county: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          county: county,
        };
      }
    });

    setSelectedDataSet(updatedRecord);
  }

  function handleSetPostcode(postcode: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          postcode: postcode,
        };
      }
    });

    setSelectedDataSet(updatedRecord);
  }

  function handleSetTelephone(telephone: string) {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        return {
          ...record,
          telephone: telephone,
        };
      }
    });

    setSelectedDataSet(updatedRecord);
  }

  function handleSetCurrentRecord(record: number) {
    setCurrentRecord((curr) => curr + record);
  }

  function handleOnlySaveAccount(): void {
    const updatedRecord = selectedDataSet.map((record) => {
      if (record.id !== id) {
        return record;
      } else {
        debugger;
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

    setSelectedDataSet(updatedRecord);

    // console.log(updatedRecord);
    // console.log(selectedDataSet[currentRecord]);
  }

  const [currentRecord, setCurrentRecord] = useState<number>(0);
  const param = useParams();
  const pickedDataSet = formatParam(param.selectedData);

  const [selectedDataSet, setSelectedDataSet] = useState(pickedDataSet);
  const id = selectedDataSet[currentRecord].id;
  const [companyName, setCompanyName] = useState<string>(
    pickedDataSet[currentRecord].companyName,
  );
  const [address, setAddress] = useState<string>(
    pickedDataSet[currentRecord].address,
  );
  const [town, setTown] = useState<string>(pickedDataSet[currentRecord].town);
  const [county, setCounty] = useState<string>(
    pickedDataSet[currentRecord].county,
  );
  const [postcode, setPostcode] = useState<string>(
    pickedDataSet[currentRecord].postcode,
  );
  const [telephone, setTelephone] = useState<string>(
    pickedDataSet[currentRecord].telephone,
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
