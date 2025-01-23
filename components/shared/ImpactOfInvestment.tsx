import Image from "next/image";

const ImpactOfInvestment = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1070px] md:h-[980px] lg:h-[680px] overflow-hidden">
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
            The Impact of
          </h3>
          <h1 className="h2-bold">
            Your <span className="text-primary-500">Investment</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Your investment in Islamic school projects does more than just
            contribute to the construction of buildings—it plays a direct role
            in shaping the lives of young Muslims and empowering them to excel
            academically, spiritually, and socially. By investing in these
            projects, you are:
          </p>
          <ul className="mb-10 md:mb-14 text-muted-foreground">
            <li className="mb-3 py-3">
              • Ensuring that children receive an education that is both
              academically rigorous and deeply rooted in Islamic values.
            </li>
            <li className="mb-3 py-3">
              • Supporting the creation of a positive learning environment where
              students can develop strong character, leadership skills, and a
              deep connection to their faith.
            </li>
            <li className="mb-3 py-3">
              • Contributing to the long-term sustainability and growth of
              Islamic education in Australia.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImpactOfInvestment;
