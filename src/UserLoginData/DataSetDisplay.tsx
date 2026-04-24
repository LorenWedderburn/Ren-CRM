import "./DataSetDisplay.css";
import { type Contact } from "../LoginData";
import DataSetPanelElement from "./DataSetPanelElement";

type DataSetDisplayProps = {
  userData: Contact;
};

function DataSetDispay({ userData }: DataSetDisplayProps) {
  return (
    <div className="datasetdisplay-div">
      {userData.dataSet.map((element) => (
        <DataSetPanelElement element={element} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default DataSetDispay;
