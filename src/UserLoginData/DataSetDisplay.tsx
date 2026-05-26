import "./DataSetDisplay.css";
import DataSetPanelElement from "./DataSetPanelElement";
import { useCRM } from "../CRMContext";

function DataSetDisplay() {
  const { userData } = useCRM();

  return (
    <div className="datasetdisplay-div">
      {userData?.dataSet?.map((element: string) => (
        <DataSetPanelElement element={element} key={element} />
      ))}
    </div>
  );
}

export default DataSetDisplay;
