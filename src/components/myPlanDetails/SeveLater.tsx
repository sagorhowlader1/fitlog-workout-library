"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { ILibraryType } from "@/types/type";
import { useContext } from "react";
import { GoBookmark } from "react-icons/go";
import { Bounce, toast } from "react-toastify";

const SaveLater = ({ data }: { data: ILibraryType }) => {
  const { saveLater, setSaveLater } = useContext(MyPlanContext);

  const handleSaveLater = () => {
  
    setSaveLater([...saveLater, data]);
    toast.success("Saved for later", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <button 
    onClick={() => handleSaveLater()}
    className="btn rounded-xl border-none bg-[#eaebe618] text-white">
                    <GoBookmark />
                    Save for later</button>
  );
};

export default SaveLater;
