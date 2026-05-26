import "./SelectedDataSetPage.module.css";
import AccountDetails from "./AccountDetails";
import { useParams } from "react-router";
import { type CompanyDataSet, type DataSetState } from "../DataSetData";
import { useState } from "react";
import WrapUp from "./WrapUp";
import EmployeesDetails from "./EmployeesDetails";
import { useCRM } from "../CRMContext";

function SelectedDataSetPage() {
  const { dataSetState, updateDataSet } = useCRM();

  function getDataTypeKey(dataset: string | undefined): keyof DataSetState {
    switch (dataset) {
      case "house builders":
        return "houseBuilders";
      case "landscapers":
        return "landscapers";
      case "architects":
        return "architects";
      case "MEP":
        return "mepContractors";
      default:
        return "mepContractors";
    }
  }

  function formatParam(dataset: string | undefined): CompanyDataSet[] {
    const key = getDataTypeKey(dataset);
    return [...dataSetState[key]];
  }

  function handleUpdateRecord(field: keyof CompanyDataSet, value: string) {
    setSelectedDataSet((prev) =>
      prev.map((record) =>
        record.id !== id ? record : { ...record, [field]: value },
      ),
    );
  }

  function handleSetCurrentRecord(record: number) {
    setCurrentRecord((curr) =>
      Math.max(Math.min(curr + record, selectedDataSet.length - 1), 0),
    );
  }

  function handleDeleteEmployee(employeeIndex: number) {
    setSelectedDataSet((prev) =>
      prev.map((record) =>
        record.id !== id
          ? record
          : {
              ...record,
              employees: record.employees.filter((_, i) => i !== employeeIndex),
            },
      ),
    );
  }

  const [currentRecord, setCurrentRecord] = useState<number>(0);
  const param = useParams();
  const pickedDataSet = formatParam(param.selectedData);

  const [selectedDataSet, setSelectedDataSet] = useState(pickedDataSet);
  const id = selectedDataSet[currentRecord].id;

  return (
    <div className="selecteddatasetpagemain-div">
      <EmployeesDetails
        key={currentRecord}
        selectedDataSet={selectedDataSet}
        currentRecord={currentRecord}
        handleDeleteEmployee={handleDeleteEmployee}
      />
      <AccountDetails
        selectedDataSet={selectedDataSet}
        currentRecord={currentRecord}
        handleUpdateRecord={handleUpdateRecord}
        handleSetCurrentRecord={handleSetCurrentRecord}
      />
      <WrapUp
        selectedDataSet={selectedDataSet}
        updateDataSetTypeUsingDataTypeAndId={updateDataSet}
        dataTypeKey={getDataTypeKey(param.selectedData)}
        currentRecord={currentRecord}
        handleSetCurrentRecord={handleSetCurrentRecord}
      />
    </div>
  );
}

export default SelectedDataSetPage;
