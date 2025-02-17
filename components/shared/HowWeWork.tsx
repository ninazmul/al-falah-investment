import Image from "next/image";

const HowWeWork = () => {
  return (
    <div className="relative h-[960px] md:h-[870px] lg:h-[640px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__99676.png"
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
            A Partnership for
          </h3>
          <h1 className="h2-bold">
            Community <span className="text-primary-500">Growth</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Al Falah Investment offers a range of investment options tailored to
            meet the needs of our investors. Whether you are interested in
            supporting the development of a new school, contributing to the
            expansion of an existing masjid, or financing other community-driven
            projects, we offer transparent and ethical investment models. Each
            investment opportunity is designed to ensure that your contributions
            are used efficiently and effectively, maximizing both financial
            returns and social impact. Our projects are carefully selected to
            ensure that they align with our mission to support the community and
            build institutions that will benefit future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
