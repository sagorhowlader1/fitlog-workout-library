'use client';
import Logo from "@/asstes/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { MyPlanContext } from "@/context/MyPlanContext";


const Navbar = ({data}) => {
  // const { addToPlan, saveLater } = useContext(MyPlanContext);
const { addToPlan, setAddToPlan, saveLater, setSaveLater } = useContext(MyPlanContext);


  const handleAddToPlan = () =>{
    setAddToPlan([...addToPlan, data]);
  };
  const handleSaveLater = () =>{
    setSaveLater([...saveLater, data]);
  };
  const pathname = usePathname()
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#000000] py-5">
        <nav className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-5">
              <Link href="/">
                <span className="flex justify-between items-center gap-3 text-2xl text-white font-bold">
                  <Image src={Logo} width={40} height={40} alt="Logo" />
                  FITLOG
                </span>
              </Link>
            </div>
            <ul className="flex justify-between items-center gap-2">
              <li className={pathname === '/'  ? 'text-[#C2F800] py-2 px-4 rounded-2xl bg-[#c2f80021]' : '' }>
                <Link href="/">Workouts</Link>
              </li>
              <li className={pathname === `/my-plan` ? 'text-[#C2F800] py-2 px-4 rounded-2xl bg-[#c2f80021]' : '' }>
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>

            <div className="gap-4">
                 <Link href="/my-plan">
                     <button
                        onClick={() => handleAddToPlan()}
                        className="btn rounded-xl border-none bg-[#C2F800]"
                      >Plan {`${addToPlan.length}`}
                  </button>
                 </Link>
                  
                  <Link href="/my-plan">
                  <button
                        onClick={() => handleSaveLater()}
                        className="btn rounded-xl border-none bg-[#eaebe618] text-white"
                      >Saved {`${saveLater.length}`}
                  </button>
                  </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-px bg-[#9ca3af3f]"></div>
    </div>
  );
};

export default Navbar;
