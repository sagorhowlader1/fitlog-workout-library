"use client";
import { MyPlanContext } from "@/context/MyPlanContext";
import { ILibraryType } from "@/types/type";
import { useContext } from "react";
import { LuCalendarPlus } from "react-icons/lu";
import { Bounce, toast } from "react-toastify";

const AddToPlanBtn = ({ data }: { data: ILibraryType }) => {
  const { addToPlan, setAddToPlan } = useContext(MyPlanContext);

  const handleAddToPlan = () => {
    console.log("add to plan triggered!!", data);

    setAddToPlan([...addToPlan, data]);
    toast.success(`Added to today's plan`, {
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
      onClick={() => handleAddToPlan()}
      className="btn rounded-xl border-none bg-[#C2F800]"
    >
      <LuCalendarPlus />
      Add to {`today's`} plan
    </button>
  );
};

export default AddToPlanBtn;
