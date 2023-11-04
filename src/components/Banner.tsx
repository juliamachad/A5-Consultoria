import Image from "next/image";
import Link from "next/link";

export function Banner({ backgroundImage, text }: any) {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      };

  return (
    <div className="bg-white dark:bg-neutral-900" style={bannerStyle}>
      <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-center pq-bs">
          <h1 className="text-5xl font-bold text-white drop-shadow">
            {text} <br />{" "}
          </h1>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-center">

          </div>
        </div>

        
      </div>
    </div>
  );
}
