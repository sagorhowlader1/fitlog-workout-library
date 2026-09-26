"use client";

import PlanCard from "@/components/todayPlan/PlanCard";
import { MyPlanContext } from "@/context/MyPlanContext";
import { ILibraryType } from "@/types/type";
import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";

const MyPlan = () => {
  const { addToPlan, saveLater } = useContext(MyPlanContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<"minutes" | "calories" | "rating">(
    "minutes",
  );

  const [selectedExercise, setSelectedExercise] = useState<ILibraryType | null>(
    null,
  );

  const exercisesPlan = activeTab === "today" ? addToPlan : saveLater;

  const totalMinutes = exercisesPlan.reduce(
    (total, item:ILibraryType) => total + Number(item.duration),
    0,
  );

  const totalCalories = exercisesPlan.reduce(
    (total, item:ILibraryType) => total + Number(item.caloriesBurned),
    0,
  );

  const exercises = useMemo(() => {
    const list = activeTab === "today" ? [...addToPlan] : [...saveLater];

    if (sortBy === "minutes") {
      return list.sort((a:ILibraryType, b:ILibraryType) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      return list.sort((a:ILibraryType, b:ILibraryType) => b.caloriesBurned - a.caloriesBurned);
    }

    return list.sort((a:ILibraryType, b:ILibraryType) => b.rating - a.rating);
  }, [activeTab, addToPlan, saveLater, sortBy]);

  return (
    <div className="container mx-auto">
      <div className="py-16">
        <div>
          <h2 className="uppercase font-bold text-4xl">My Plan</h2>
          <p className="text-[#9CA3AF] py-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-6 border border-[#252a33] bg-[#13161c] rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#9CA3AF]">Exercisec</p>
              <h2 className="text-[#C2F800] text-4xl font-bold mt-2">
                {exercisesPlan.length}
              </h2>
            </div>

            <div className="border-y md:border-y-0 md:border-x border-[#252a33] px-0 md:px-8 py-6 md:py-0">
              <p className="text-[#9CA3AF]">Miuntes</p>
              <h2 className="text-white text-4xl font-bold mt-2">
                {totalMinutes}
              </h2>
            </div>

            <div>
              <p className="text-[#9CA3AF]">Calories</p>
              <h2 className="text-white text-4xl font-bold mt-2">
                {totalCalories}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex bg-[#171b23] rounded-xl p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 rounded-lg cursor-pointer ${
                activeTab === "today"
                  ? "bg-[#252a33] text-white"
                  : "text-[#9CA3AF]"
              }`}
            >
              {`Today's`} Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 rounded-lg cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#252a33] text-white"
                  : "text-[#9CA3AF]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#9CA3AF]">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "minutes" | "calories" | "rating")
              }
              className="bg-[#171b23] border border-[#252a33] rounded-lg px-3 py-2 text-white outline-none cursor-pointer"
            >
              <option value="minutes">Minutes</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {exercises.map((item:ILibraryType) => (
            <PlanCard
              key={item.id}
              data={item}
              isSaved={activeTab === "saved"}
              onViewDetails={setSelectedExercise}
            />
          ))}

          {exercises.length === 0 && (
            <div className="text-[#9CA3AF] flex-col justify-center text-center bg-[#26272738] mt-6 border border-[#252a335d]  rounded-2xl p-28 ">
              <h2 className="text-white font-bold text-2xl">
                NOTHING HERE YET
              </h2>
              <p className="text-[#9CA3AF] pb-4">
                Browse the library and add a lift to get today moving.
              </p>
              <Link href="/"
              className="items-center gap-1 cursor-pointer px-3 mx-2.5 py-2 bg-[#C2F800] rounded-full text-black text-sm font-medium"> 
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        {selectedExercise && (
          <div className="mt-8 border border-[#252a33] bg-[#13161c] rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-5 border-b border-[#252a33]">
              <h2 className="text-white text-2xl font-bold uppercase">
                View Details
              </h2>
            </div>

            <button
              onClick={() => setSelectedExercise(null)}
              className="text-white text-xl cursor-pointer"
            >
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
