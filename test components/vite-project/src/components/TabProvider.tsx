
import { createContext, useContext, useState, ReactNode } from "react";



interface TabContextType {
  state: any; // Replace 'any' with a specific type if known
  setState: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the same type as 'state'
}

const TabContext = createContext<TabContextType | null>(null);



interface TabProviderProps {

  children: ReactNode;

}



export const TabProvider = ({ children }: TabProviderProps) => {

  const [state, setState] = useState(null);



  return (

    <TabContext.Provider value={{ state, setState }}>

      {children} {/* Render children inside the provider */}

    </TabContext.Provider>

  );

};



export const useTabContext = () => useContext(TabContext);