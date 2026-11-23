import { ILibraryType } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";

const getLibraryCard = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LibraryCard = async () => {
  const libraryCard = await getLibraryCard();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="pt-10 sm:pt-20">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          THE LIBRARY
        </h2>
        <p className="pt-3 text-muted">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mt-8 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {libraryCard.map((data: ILibraryType, index: number) => (
          <div key={index} className="cursor-pointer">
            <Link
              href={`/allLibrary/${data.id}`}
              className="block h-full transition hover:opacity-90"
            >
              <div className="h-full overflow-hidden rounded-3xl bg-surface text-ink">
                <Image
                  src={data.image}
                  width={480}
                  height={270}
                  alt={data.name}
                  className="h-44 w-full object-cover sm:h-48"
                />
                <div className="px-5 pb-6">
                  <div className="flex flex-wrap items-center gap-2 py-4">
                    {data.muscleGroups.map((muscle) => (
                      <p
                        key={muscle}
                        className="rounded-2xl bg-brand px-2.5 py-2 text-sm font-semibold text-black uppercase"
                      >
                        {muscle}
                      </p>
                    ))}
                  </div>
                  <p className="text-2xl font-bold uppercase text-ink sm:text-3xl">
                    {data.name}
                  </p>
                  <p className="text-muted">{data.equipment}</p>
                  <div className="my-4 h-px bg-divider"></div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <p className="flex items-center gap-2 text-muted">
                      <FaRegClock />
                      {data.duration} min
                    </p>
                    <p className="flex items-center gap-2 text-muted">
                      <FaFireFlameCurved />
                      {data.caloriesBurned} kcal
                    </p>
                    <p className="flex items-center gap-2 text-muted">
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
