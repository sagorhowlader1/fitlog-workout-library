import { ILibraryType } from "@/types/type";


interface ILibraryDetailsCardProps{
    params: {
        id: string;
    }
}
const LibraryDetailsCard = async({params}: ILibraryDetailsCardProps) => {
    const {id} = await params;
    console.log(id, "id card!!");

    return (
        <div>
            Library Details Card {id}
            <div>
                {data.map((data: ILibraryType, index:number)=> (

                    ))}
            </div>
        </div>
    );
};

export default LibraryDetailsCard;