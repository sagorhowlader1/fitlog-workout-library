'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const MyPlanContext = createContext({});

const MyPlanProvider = ({children}: {children: ReactNode}) => {
    const [addToPlan, setAddToPlan] = useState([]);
    const [saveLater, setSaveLater] = useState([]);

    const sharedData = {
        addToPlan,
        setAddToPlan,
        saveLater,
        setSaveLater
    };

    return (
        <MyPlanContext.Provider value={sharedData}>{children}</MyPlanContext.Provider> 
    );
};

export default MyPlanProvider;