import { createContext, useContext, useState } from "react";
import * as sourceDataSetData from "./DataSetData";
import type { Contact } from "./LoginData";
import type { CompanyDataSet, DataSetState } from "./DataSetData";

type CRMContextType = {
  userData: Contact | undefined;
  setUserData: (user: Contact) => void;
  dataSetState: DataSetState;
  updateDataSet: (dataType: string, id: number, updatedRecord: CompanyDataSet[]) => void;
  login: boolean;
  handleLogin: () => void;
};

const CRMContext = createContext<CRMContextType | null>(null);

export function CRMProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<Contact>();
  const [dataSetState, setDataSetState] = useState<DataSetState>(sourceDataSetData);
  const [login, setLogin] = useState(false);

  function handleLogin() {
    setLogin((prev) => !prev);
  }

  function updateDataSet(dataType: string, id: number, updatedRecord: CompanyDataSet[]) {
    setDataSetState((state) => ({ ...state, [dataType]: updatedRecord }));
  }

  return (
    <CRMContext.Provider value={{ userData, setUserData, dataSetState, updateDataSet, login, handleLogin }}>
      {children}
    </CRMContext.Provider>
  );
}

export function useCRM() {
  const context = useContext(CRMContext);
  if (!context) throw new Error("useCRM must be used inside CRMProvider");
  return context;
}
