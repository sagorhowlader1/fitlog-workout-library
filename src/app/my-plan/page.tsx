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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 sm:py-16">
        <div>
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">My Plan</h2>
          <p className="py-2 text-muted">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-5 sm:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-muted">Exercisec</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-text sm:text-4xl">
                {exercisesPlan.length}
              </h2>
            </div>

            <div className="border-y border-line px-0 py-5 md:border-y-0 md:border-x md:px-8 md:py-0">
              <p className="text-muted">Miuntes</p>
              <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
                {totalMinutes}
              </h2>
            </div>

            <div>
              <p className="text-muted">Calories</p>
              <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
                {totalCalories}
              </h2>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex self-start rounded-xl bg-surface-3 p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm sm:flex-none sm:px-5 sm:text-base ${
                activeTab === "today"
                  ? "bg-line text-ink"
                  : "text-muted"
              }`}
            >
              {`Today's`} Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm sm:flex-none sm:px-5 sm:text-base ${
                activeTab === "saved"
                  ? "bg-line text-ink"
                  : "text-muted"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-muted">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "minutes" | "calories" | "rating")
              }
              className="cursor-pointer rounded-lg border border-line bg-surface-3 px-3 py-2 text-ink outline-none"
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
            <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-line-soft bg-empty p-10 text-center sm:p-20">
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                NOTHING HERE YET
              </h2>
              <p className="pb-4 text-muted">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="inline-block cursor-pointer rounded-full bg-brand px-5 py-2 text-sm font-medium text-black"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>

        {selectedExercise && (
          <div className="mt-8 border border-line bg-surface-2 rounded-2xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-5 border-b border-line">
              <h2 className="text-ink text-2xl font-bold uppercase">
                View Details
              </h2>
            </div>

            <button
              onClick={() => setSelectedExercise(null)}
              className="text-ink text-xl cursor-pointer"
            >
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
