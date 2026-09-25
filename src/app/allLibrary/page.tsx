'use client';
import { MyPlanContext } from '@/context/MyPlanContext';
import React, { useContext } from 'react';

const Page = () => {
    const {addToPlan, saveLater} = useContext(MyPlanContext);
    console.log(addToPlan, "addToPlan!!")
    return (
        <div>
            all library | Total addToPlan: {addToPlan.length} <br /> | Total saveLater: {saveLater.length}
        </div>
    );
};

export default Page;