"use client";

import { ILibraryType } from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";

interface IMyPlanContext {
  addToPlan: ILibraryType[];
  setAddToPlan: React.Dispatch<React.SetStateAction<ILibraryType[]>>;
  saveLater: ILibraryType[];
  setSaveLater: React.Dispatch<React.SetStateAction<ILibraryType[]>>;
}

export const MyPlanContext = createContext<IMyPlanContext>({
  addToPlan: [],
  setAddToPlan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});

const MyPlanProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<ILibraryType[]>([]);
  const [saveLater, setSaveLater] = useState<ILibraryType[]>([]);

  const sharedData = {
    addToPlan,
    setAddToPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <MyPlanContext.Provider value={sharedData}>
      {children}
    </MyPlanContext.Provider>
  );
};

export default MyPlanProvider;
