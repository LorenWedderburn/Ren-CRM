import "./DataSetPanelElement.css";
import { Link } from "react-router";

type elementData = {
  element: string;
};

function ElementText(element: string): string | undefined {
  let dataSetType: string | undefined;
  switch (element) {
    case "house builders":
      dataSetType = "House Builders";
      break;
    case "landscapers":
      dataSetType = "Landscapers";
      break;
    case "architects":
      dataSetType = "Architects";
      break;
    case "MEP":
      dataSetType = "MEP Contractors";
      break;
  }

  return dataSetType;
}

function DataSetPanelElement({ element }: elementData) {
  //const [searchParams, setSearchParams] = useSearchParams();

  // function handleParams(): void {
  //   setSearchParams({ filter: element });
  //   console.log("Hello I'm handle params");
  // }

  return (
    <>
      <Link
        onClick={() => {
          // handleParams();
        }}
        to={`datasetpage/${element}`}
        className="datasetpanel-div"
      >
        {ElementText(element)}
      </Link>
    </>
  );
}

export default DataSetPanelElement;
