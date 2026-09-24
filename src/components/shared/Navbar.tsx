import React from "react";
import Logo from "@/asstes/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
              <li className="text-[#C2F800] py-2 px-4 rounded-2xl bg-[#c2f80021]">
                <Link href="/workouts">Workouts</Link>
              </li>
              <li className="py-2 px-4 rounded-2xl text-white hover:bg-[#9ca3af2f]">
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>

            <div>
              <button className="btn btn-success">Plan</button>
              <button className="btn btn-active">Saved</button>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-px bg-[#9ca3af3f]"></div>
    </div>
  );
};

export default Navbar;
