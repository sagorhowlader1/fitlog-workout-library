"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import React, { useContext } from "react";

const MyPlan = () => {
  const { addToPlan, saveLater } = useContext(MyPlanContext);
  console.log(addToPlan, saveLater, "addToPlan, saveLater");
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="uppercase">My Plan</h2>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>
      AddToPlan: {addToPlan.length} <br /> SaveLater {saveLater.length}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box text-black">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label={`Today's Plan`}
          
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
      </div>
    </div>
  );
};

export default MyPlan;
