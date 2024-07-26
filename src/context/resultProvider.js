import ResultContext from './createContext.js';
import { useState } from 'react';

const ResultProvider = ({ children }) => {
  const [generalData, setGeneralData] = useState(null);
  const [data, setData] = useState(null);
  const [detailsData, setDetailsData] = useState(null);

  const contextValue = {
    generalData, setGeneralData,
    data, setData,
    detailsData, setDetailsData
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};

export { ResultProvider };