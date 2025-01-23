import Image from "next/image";

const OurLegacyAndVision = () => {
  return (
    <div className="relative h-[1030px] md:h-[950px] lg:h-[740px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Our Legacy and
          </h3>
          <h1 className="h2-bold">
            Vision <span className="text-primary-500">for the Future</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              When we founded Al Falah Investment Pty Ltd, our goal was not just
              to build schools and masjids—it was to create a legacy that would
              endure for generations. By supporting these projects, we are not
              only providing the next generation of Muslims with the educational
              tools and spiritual guidance they need, but we are also fulfilling
              a collective responsibility as part of the larger Muslim Ummah.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              We envision a future where every Muslim community, no matter where
              they are located, has access to top-tier Islamic schools and
              masjids that are equipped to meet the needs of a growing and
              dynamic population. Through ethical investments, we can help
              create a sustainable model for funding these projects, ensuring
              that they thrive for years to come.
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/Service/knowledge.png"
            width={500}
            height={500}
            alt="Al Falah Investment logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-yellow-400 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
      </div>
    </div>
  );
};

export default OurLegacyAndVision;
