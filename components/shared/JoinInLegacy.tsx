import Image from "next/image";

const JoinInLegacy = () => {
  return (
    <div className="relative h-[700px] md:h-[730px] lg:h-[500px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Join Us in
          </h3>
          <h1 className="h2-bold">
            Building a <span className="text-primary-500">Legacy</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Al Falah Investment, we are not just focused on immediate
            profits—we are building a legacy that will have a lasting, positive
            effect on society. By partnering with us, you become part of a
            movement to create better educational opportunities, strengthen the
            foundation of faith, and foster a thriving, supportive community.
          </p>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__81858.png"
            width={500}
            height={500}
            alt="Al Falah Investment logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-primary-500 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
      </div>
    </div>
  );
};

export default JoinInLegacy;
