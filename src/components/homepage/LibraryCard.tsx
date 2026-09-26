import { ILibraryType } from "@/types/type";

import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

// interface ILibraryTypeProps {
//   data: ILibraryType;
//   id: number;
// };

const getLibraryCard = async() => {
   const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LibraryCard = async () => {
  const libraryCard = await getLibraryCard();
  console.log(libraryCard, "data fetch!!");
  return (
    <div className="container mx-auto">
      <div className="pt-20">
        <h2 className="font-bold text-4xl text-white">THE LIBRARY</h2>
        <p className="text-[#9CA3AF] pt-3">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mt-8 mb-18 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {libraryCard.map((data: ILibraryType, index: number) => (
          <div key={index} className="cursor-pointer">
            <Link href={`/allLibrary/${data.id}`}>
              <div className=" text-white rounded-3xl my-4 mx-4 bg-[#15171D]">
                <Image
                  src={data.image}
                  width={480}
                  height={10}
                  alt="Image"
                  className="rounded-t-3xl"
                />
                <div className="ml-6">
                  <div className="flex items-center gap-2 py-5 uppercase">
                    {data.muscleGroups.map((muscle) => (
                      <p
                        key={muscle}
                        className="text-black font-semibold gap-4 py-2 px-2.5 bg-[#C2F800] rounded-2xl"
                      >
                        {muscle}
                      </p>
                    ))}
                  </div>
                  <p className="text-white text-3xl uppercase font-bold">
                    {data.name}
                  </p>
                  <p className="text-[#9CA3AF]">{data.equipment}</p>
                  <div className="my-5 items-center mr-6 h-px bg-[#9ca3af3f]"></div>
                  <div className="flex justify-self-start gap-7 pb-6">
                    <p className="flex justify-between gap-2 items-center text-[#9CA3AF]">
                      <FaRegClock />
                      {data.duration} min
                    </p>
                    <p className="flex justify-between gap-2 items-center text-[#9CA3AF]">
                      <FaFireFlameCurved />
                      {data.caloriesBurned} kcal
                    </p>
                    <p className="flex justify-between gap-2 items-center text-[#9CA3AF]">
                      <FaRegStar /> {data.rating}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryCard;
