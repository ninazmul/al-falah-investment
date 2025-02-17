import Image from "next/image";

const JoinUsLegacy = () => {
  return (
    <div className="relative h-[790px] md:h-[800px] lg:h-[530px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__81860.png"
            width={500}
            height={500}
            alt="Al Falah Investment logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-primary-500 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Join Us in
          </h3>
          <h1 className="h2-bold">
            Building <span className="text-primary-500">This Legacy</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Al Falah Investment Pty Ltd was founded with a simple but profound
              vision: to ensure that the next generation of Muslims inherits a
              community that values education, faith, and social responsibility.
              We invite you to join us in this journey, to invest in the future
              of our children, our mosques, and our communities.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Together, we can create a lasting impact and build a better future
              for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsLegacy;
