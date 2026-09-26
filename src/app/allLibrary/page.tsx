
import AddToPlan from "@/components/myPlanDetails/AddToPlan";
import SaveLater from "@/components/myPlanDetails/SaveLater";
import { ILibraryType } from "@/types/type";
import Image from "next/image";


interface IDetailsPageProps {
    params: Promise<{
    id: string;
  }>;
}

const getLibraryCard = async (): Promise<ILibraryType[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch library data");
    }

    const data = await res.json();
    return data;
};

const AllLibrary = async ({ params }: IDetailsPageProps) => {
    const { id } = await params;
    const libraryCard = await getLibraryCard();
    const data = libraryCard.find(
    (item: ILibraryType) => String(item.id) === String(id),
);

    if(!data) {
        return(
            <div className="container mx-auto">
                <div className="py-6 text-center">
                    <h2 className="text-white text-3xl font-bold">Exercise Not Found</h2>
                    <p className="text-[#9CA3AF] mt-2"> 
                    The Exercise you are looking for does not exist.</p>
                </div>
            </div>
        );
        }

    return (
    <div className="container mx-auto">
      <div className="py-10 px-10">
        <div className="card lg:card-side shadow-sm">
          <figure className="rounded-2xl">
            <Image width={800} height={180} src={data.image} alt="Image" />
          </figure>
          <div className="ml-12">
            <h2 className="text-white text-3xl uppercase font-bold">
              {data.name}
            </h2>
            <p className="text-[#9CA3AF] py-3">{data.description}</p>
            <div className="flex gap-2">
              {data.muscleGroups.map((muscle) => (
                  <p
                  key={muscle}
                  className="text-black font-semibold gap-4 py-2 px-3 bg-[#C2F800] rounded-2xl"
                  >
                  {muscle}
                </p>
              ))}
            </div>

            <div className=" bg-[#15171D] rounded-2xl px-8 my-8">
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">EQUIPMENT</p>
                <p>{data.equipment}</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">DIFFICULTY </p>
                <p>{data.difficulty}</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">SETS</p>
                <p className="">{data.sets}</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">REPS</p>
                <p className="">{data.reps}</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">DURATION</p>
                <p className="">{data.duration} min</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">CALORIES</p>
                <p className="">{data.caloriesBurned} kcal</p>
              </div>
              <div className="h-px bg-[#9ca3af3f]"></div>
              <div className="flex justify-between items-center py-3">
                <p className="text-[#9CA3AF]">RATING</p>
                <p className=""> {data.rating}</p>
              </div>
            </div>
              <div>
                <h2 className="uppercase py-3 font-bold ">instructions</h2>
                <div>
                    {data.instructions.map((instructions, index) => (
                        <p className="py-2" key={index}>{index + 1}. {instructions}</p>
                    ))}
                </div>
              </div>
          </div>
        </div>
          <div className="card-actions justify-center ml-100 pb-20 pt-8">
             <AddToPlan data={data} />

              <SaveLater data={data} />
            </div>
      </div>
    </div>
  );

};

export default AllLibrary;