"use client";
import Logo from "@/asstes/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { MyPlanContext } from "@/context/MyPlanContext";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { addToPlan, saveLater } = useContext(MyPlanContext);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-page py-4 sm:py-5">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-5">
              <Link href="/">
                <span className="flex justify-between items-center gap-2 sm:gap-3 text-xl sm:text-2xl text-ink font-bold">
                  <Image src={Logo} width={40} height={40} alt="Logo" />
                  FITLOG
                </span>
              </Link>
            </div>
            <ul className=" hidden md:flex justify-between items-center gap-2">
              <li
                className={
                  pathname === "/"
                    ? "text-brand-text py-2 px-4 rounded-2xl bg-brand-soft"
                    : ""
                }
              >
                <Link href="/">Workouts</Link>
              </li>
              <li
                className={
                  pathname === `/my-plan`
                    ? "text-brand-text py-2 px-4 rounded-2xl bg-brand-soft"
                    : ""
                }
              >
                <Link href="/my-plan">My Plan</Link>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <div className="hidden gap-4 md:flex">
                <div>
                  <Link href="/my-plan">
                    <button className="btn rounded-xl border-none gap-6 bg-brand text-brand-ink">
                      Plan {addToPlan.length}
                    </button>
                  </Link>
                </div>

                <div>
                  <Link href="/my-plan">
                    <button className="btn rounded-xl border-none bg-ghost text-ink">
                      Saved {saveLater.length}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  className="text-ink text-3xl"
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="mt-5 flex flex-col gap-3 md:hidden">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/"
                    ? "text-brand-text py-3 px-4 rounded-xl bg-brand-soft"
                    : "text-ink py-3 px-4 rounded-xl"
                }
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setIsOpen(false)}
                className={
                  pathname === "/my-plan"
                    ? "text-brand-text py-3 px-4 rounded-xl bg-brand-soft"
                    : "text-ink py-3 px-4 rounded-xl"
                }
              >
                My Plan
              </Link>

              <Link href="/my-plan" onClick={() => setIsOpen(false)}>
                <button className="btn w-full rounded-xl border-none bg-brand text-brand-ink">
                  Plan {addToPlan.length}
                </button>
              </Link>
              <Link href="/my-plan" onClick={() => setIsOpen(false)}>
                <button className="btn w-full rounded-xl border-none bg-ghost text-ink">
                  Saved {saveLater.length}
                </button>
              </Link>
            </div>
          )}
        </nav>
      </div>

      <div className="h-px bg-divider"></div>
    </div>
  );
};

export default Navbar;
