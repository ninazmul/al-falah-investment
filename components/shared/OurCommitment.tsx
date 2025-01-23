import Image from "next/image";

const OurCommitment = () => {
  return (
    <div className="relative h-[1100px] md:h-[950px] lg:h-[770px] overflow-hidden">
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
            Our Commitment to
          </h3>
          <h1 className="h2-bold">
            Ethical, Sharia-Compliant{" "}
            <span className="text-primary-500">Investments</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              At the heart of Al Falah Investment lies our unwavering commitment
              to Sharia-compliant practices. We avoid any involvement with
              interest (Riba) and ensure that all of our investments are
              structured in a way that aligns with Islamic principles. We work
              closely with Sharia advisors to ensure that our investment
              opportunities adhere to the highest ethical standards.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Our approach allows investors to participate in projects that have
              a direct impact on the community, knowing that their funds are
              being used in a way that is pleasing to Allah (SWT).
              <br />
              The returns on these investments are not just financial—they are a
              source of Barakah (blessing) in this life and the Hereafter, as
              they contribute to projects that serve the greater good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
