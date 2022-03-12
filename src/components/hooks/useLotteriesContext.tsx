import React, { createContext, useCallback, useContext, useState } from "react";

interface ILotteryContextData {
  nameContest: string;
  addNameContest(name: string): void;
  numberContestSelected: number;
  addNumberContestSelected(number: number): void;
  contestDate: string;
  addContestDate(date: string): void;
}

const LotteriesContext = createContext<ILotteryContextData>({} as ILotteryContextData);

export const LotteriesContextProvider: React.FC = ({ children }) => {
  const [nameContest, setNameContest] = useState<string>("");
  const [numberContestSelected, setNumberContestSelected] = useState<number>(0);
  const [contestDate, setContestDate] = useState<string>("");

  const addNameContest = useCallback((name: string) => {
    setNameContest(name);
  }, [setNameContest]);

  const addNumberContestSelected = useCallback((number: number) => {
    setNumberContestSelected(number);
  }, [setNumberContestSelected]);

  const addContestDate = useCallback((date: string) => {
    setContestDate(date);
  }, [setContestDate]);

  return(
    <LotteriesContext.Provider value={{
      nameContest, 
      addNameContest, 
      numberContestSelected, 
      addNumberContestSelected,
      contestDate,
      addContestDate
    }}>
      {children}
    </LotteriesContext.Provider>
  )
}

export function useLotteriesContext() {
  const context = useContext(LotteriesContext);

  return context;
}