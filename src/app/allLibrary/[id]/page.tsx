import AddToPlanBtn from "@/components/myPlanDetails/AddToPlan";
import SeveLater from "@/components/myPlanDetails/SaveLater";
import { ILibraryType } from "@/types/type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibraryCard = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LibarayDetailsPage = async ({ params }: IDetailsPageProps) => {
  const { id } = await params;
  const libraryCard = await getLibraryCard();
  const data = libraryCard.find(
    (data: ILibraryType) => String(data.id) === String(id),
  ) as ILibraryType | undefined;

  if (!data) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <figure className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              width={750}
              height={420}
              src={data.image}
              alt={data.name}
              className="h-56 w-full rounded-2xl object-cover sm:h-72 lg:h-[420px]"
            />
          </figure>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold uppercase text-ink sm:text-3xl">
              {data.name}
            </h2>
            <p className="py-3 text-muted">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.muscleGroups.map((muscle) => (
                <p
                  key={muscle}
                  className="rounded-2xl bg-brand px-3 py-2 font-semibold text-black"
                >
                  {muscle}
                </p>
              ))}
            </div>

            <div className="my-8 rounded-2xl bg-surface px-4 sm:px-8">
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">EQUIPMENT</p>
                <p>{data.equipment}</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">DIFFICULTY </p>
                <p>{data.difficulty}</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">SETS</p>
                <p className="">{data.sets}</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">REPS</p>
                <p className="">{data.reps}</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">DURATION</p>
                <p className="">{data.duration} min</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">CALORIES</p>
                <p className="">{data.caloriesBurned} kcal</p>
              </div>
              <div className="h-px bg-divider"></div>
              <div className="flex items-center justify-between gap-4 py-3">
                <p className="text-muted">RATING</p>
                <p className=""> {data.rating}</p>
              </div>
            </div>

            <div>
              <h2 className="py-2 font-bold uppercase">instructions</h2>
              <div className="space-y-1">
                {data.instructions.map((instructions, index) => (
                  <p className="py-2 text-muted" key={index}>
                    {index + 1}. {instructions}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 pb-10">
          <AddToPlanBtn data={data} />

          <SeveLater data={data} />
        </div>
      </div>
    </div>
  );
};

export default LibarayDetailsPage;
