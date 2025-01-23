import Image from "next/image";

const OurVisionForAFI = () => {
  return (
    <div className="relative h-[1140px] md:h-[980px] lg:h-[760px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/Service/knowledge.png"
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
            Our Vision for
          </h3>
          <h1 className="h2-bold">
            Al Falah Investment{" "}
            <span className="text-primary-500">Pty Ltd</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              The mission of Al Falah Investment is to provide Muslim investors
              with a way to contribute to the growth and sustainability of
              Islamic educational and spiritual institutions. We set out to
              create an investment model that was not only profitable but also
              socially responsible—one that aligned with the principles of
              Islamic finance, emphasizing fairness, transparency, and ethical
              practices.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Through Al Falah, we provide a platform where individuals can
              invest directly in the construction of new schools, the expansion
              of masjids, and the creation of endowment funds to ensure the
              long-term sustainability of these institutions. Our goal is to
              build an enduring legacy of educational excellence and spiritual
              growth, where future generations of Muslim children will have
              access to the tools they need to succeed in both the worldly and
              spiritual realms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionForAFI;
