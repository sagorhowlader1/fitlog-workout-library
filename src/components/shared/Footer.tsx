import Image from "next/image";
import Link from "next/link";
import Logo from "@/asstes/logo.png";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="h-px bg-[#9ca3af3f]"></div>
      <div className="bg-[#000000] py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <Link href="/">
              <span className="flex justify-between md:justify-start items-center gap-3 text-2xl font-bold text-white">
                <Image src={Logo} width={40} height={40} alt="Logo" />
                FITLOG
              </span>
            </Link>
            <div className="text-center md:text-right">
              <p className="text-[#9CA3AF]">
                © 2026 FitLog — Workout Library. Train hard, log honest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
