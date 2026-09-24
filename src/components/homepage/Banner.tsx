import Image from 'next/image';
import BannerImg from '@/asstes/banner.png'

const Banner = () => {
    return (
        <div className='py-15'>
            <div className='container mx-auto bg-[#15171D] rounded-3xl'>
                <div className='flex justify-between items-center py-30 px-30'>

                <div>
                    <h2 className='text-[#C2F800] py-4'>WORKOUT LIBRARY</h2>
                    <p className='text-[#FFFFFF] font-extrabold text-5xl pb-8'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</p>
                    <p className='text-[#9CA3AF] pb-10'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> 
                            into today plan, and watch the week work add up.
                    </p>
                    <button className="btn border-none bg-[#C2F800]">BROWSE WORKOUTS</button>
                </div>
                <div>
                    <Image src={BannerImg} width={400} height={400} alt='BannerImg' />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;