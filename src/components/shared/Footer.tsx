import Image from "next/image";
import Link from "next/link";
import Logo from "@/asstes/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="h-px bg-[#9ca3af3f]"></div>
      <div className="bg-[#000000] py-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-5">
            <Link href="/">
              <span className="flex justify-between items-center gap-3 text-2xl font-bold text-white">
                <Image src={Logo} width={40} height={40} alt="Logo" />
                FITLOG
              </span>
            </Link>
            <div>
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
