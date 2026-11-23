"use client";

import { MyPlanContext } from "@/context/MyPlanContext";
import { ILibraryType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved, FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";

interface ILibraryTypeProps {
  data: ILibraryType;
  isSaved?: boolean;
  onViewDetails: (data: ILibraryType) => void;
}

const PlanCard = ({ data, isSaved = false }: ILibraryTypeProps) => {
  const { setAddToPlan, setSaveLater } = useContext(MyPlanContext);

  const handleRemove = () => {
    if (isSaved) {
      setSaveLater((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      setAddToPlan((prev) => prev.filter((item) => item.id !== data.id));
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-surface-2 p-3 sm:p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <Image
          src={data.image}
          width={140}
          height={90}
          alt={data.name}
          className="h-40 w-full rounded-xl object-cover sm:h-24 sm:w-36"
        />

        <div className="flex-1">
          <p className="text-xl font-bold uppercase text-ink sm:text-2xl">
            {data.name}
          </p>
          <p className="text-muted">{data.equipment}</p>

          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 sm:mt-4">
            <p className="flex items-center gap-2 text-muted">
              <FaRegClock className="text-brand-text" />
              {data.duration} min
            </p>
            <p className="flex items-center gap-2 text-muted">
              <FaFireFlameCurved className="text-brand-text" />
              {data.caloriesBurned} kcal
            </p>
            <p className="flex items-center gap-2 text-muted">
              <FaRegStar className="text-brand-text" /> {data.rating}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/allLibrary/${data.id}`}
            className="cursor-pointer rounded-full border border-edge px-4 py-2 text-sm text-ink sm:px-5"
          >
            View Details
          </Link>

          {!isSaved && (
            <button className="mx-0 flex cursor-pointer items-center gap-1 rounded-full bg-brand px-3 py-2 text-sm font-medium text-black sm:mx-2.5">
              <IoCheckmarkSharp /> Mark as Done
            </button>
          )}
          <button
            className="cursor-pointer hover:text-hover-ink"
            onClick={handleRemove}
            aria-label={`Remove ${data.name}`}
          >
            <FaXmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
