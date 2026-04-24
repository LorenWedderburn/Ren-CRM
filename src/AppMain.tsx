import "./css/AppMain.css";
import UserDetailsBar from "./UserLoginData/UserDetailsBar";
import { type Contact } from "./LoginData";
import { type CompanyDataSet } from "./DataSetData";
import DataSetDispay from "./UserLoginData/DataSetDisplay";
import { useState } from "react";
import * as sourceDataSetData from "./DataSetData";

type UserData = {
  userData: Contact;
  selectedDataSet: CompanyDataSet;
  handleSelectedDataSet: CompanyDataSet[];
};

function AppMain({ userData }: UserData) {
  const [dataSetState, setDataSetState] = useState(sourceDataSetData);
  const [selectedDataSet, setSelectedDataSet] = useState<CompanyDataSet>();

  const updateDataSetTypeUsingDataTypeAndId = (
    dataType: string,
    id: string,
    updatedRecord: any,
  ) => {
    //dataSetState[dataType][id]
    const correctDataSet: [] = dataSetState[dataType];
    const recordToUpdate = correctDataSet[id];

    const matchingIndex = correctDataSet.findIndex((record: { id: string }) => {
      return record.id === id;
    });
    debugger;
  };

  updateDataSetTypeUsingDataTypeAndId("landscapers", 3);

  function handleSetSelectedDataSet(dataset: CompanyDataSet): void {
    setSelectedDataSet(dataset);
  }

  return (
    <div className="appmain-div">
      <div className="elements-div">
        <div className="userdetails-div">
          <UserDetailsBar userData={userData} />
        </div>
        <div className="dataset-div">
          <DataSetDispay userData={userData} />
        </div>
      </div>
      <div>{JSON.stringify(dataSetState)}</div>
    </div>
  );
}

export default AppMain;
