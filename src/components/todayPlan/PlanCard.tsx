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
  id: number;
  isSaved?: boolean;
  onViewDetails: (data: ILibraryType) => void;
}

const PlanCard = ({
  data,
  isSaved = false,
  onViewDetails,
}: ILibraryTypeProps) => {
  const { addToPlan, setAddToPlan, saveLater, setSaveLater } =
    useContext(MyPlanContext);

  const handleRemove = () => {
    if (isSaved) {
      setSaveLater((prev) => prev.filter((item) => item.id !== data.id));
    } else {
      setAddToPlan((prev) => prev.filter((item) => item.id !== data.id));
    }
  };

  const handleAddToPlan = () => {
    const alreadyExists = addToPlan.some((item) => item.id === data.id);

    if (!alreadyExists) {
      setAddToPlan((prev) => [...prev, data]);
    }

    setSaveLater((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <div className="border border-[#252a33] bg-[#13161c] rounded-2xl p-4">
      <div className="flex items-center gap-5">
        <Image
          src={data.image}
          width={140}
          height={90}
          alt={data.name}
          className="rounded-t-xl object-cover"
        />

        <div className="flex-1">
          <p className="text-white text-2xl uppercase font-bold">{data.name}</p>
          <p className="text-[#9CA3AF]">{data.equipment}</p>

          <div className="flex gap-6 mt-4">
            <p className="flex  gap-2 items-center text-[#9CA3AF]">
              <FaRegClock className="text-[#C2F800]" />
              {data.duration} min
            </p>
            <p className="flex gap-2 items-center text-[#9CA3AF]">
              <FaFireFlameCurved className="text-[#C2F800]" />
              {data.caloriesBurned} kcal
            </p>
            <p className="flex justify-between gap-2 items-center text-[#9CA3AF]">
              <FaRegStar className="text-[#C2F800]" /> {data.rating}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/allLibrary/${data.id}`}
            className="px-5 py-2  border cursor-pointer border-[#374151] rounded-full
            text-white text-sm"
          >
            View Details
          </Link>

          {!isSaved && (
            <button
              className="flex items-center gap-1 cursor-pointer px-3 mx-2.5 py-2 bg-[#C2F800] rounded-full text-black
            text-sm font-medium"
            >
              <IoCheckmarkSharp /> Mark as Done
            </button>
          )}
          <button
            className="cursor-pointer hover:text-[#525352f6]"
            onClick={handleRemove}
          >
            <FaXmark />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
