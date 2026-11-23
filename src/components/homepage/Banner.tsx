import Image from "next/image";
import BannerImg from "@/asstes/banner.png";

const Banner = () => {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-15">
      <div className="container mx-auto overflow-hidden rounded-2xl bg-surface sm:rounded-3xl">
        <div className="flex flex-col items-center gap-8 px-6 py-10 sm:px-10 sm:py-16 lg:flex-row lg:justify-between lg:gap-12 lg:px-30 lg:py-30">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="py-4 text-brand-text">WORKOUT LIBRARY</h2>
            <p className="pb-6 text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </p>
            <p className="pb-8 text-muted sm:pb-10">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today plan, and watch the week work add up.
            </p>
            <button className="btn border-none bg-brand text-brand-ink">
              BROWSE WORKOUTS
            </button>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={BannerImg}
              width={400}
              height={400}
              alt="BannerImg"
              priority
              className="h-auto w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
