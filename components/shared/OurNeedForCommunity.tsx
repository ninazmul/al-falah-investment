import Image from "next/image";

const OurNeedForCommunity = () => {
  return (
    <div className="relative h-[1120px] md:h-[980px] lg:h-[770px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            The Need for
          </h3>
          <h1 className="h2-bold">
            Community-Driven{" "}
            <span className="text-primary-500">Investment</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              One of the fundamental values that inspired us was the idea of{" "}
              <i>community-driven investment</i>. By pooling resources together,
              we can fund projects that will have a lasting, positive impact on
              the entire community. We understood that raising funds for such
              projects through traditional methods—such as relying on government
              grants or interest-based loans—was not sustainable in the long run
              and did not align with our Islamic values.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Our solution was to create a structure where members of the
              community could invest ethically in projects that benefit both
              themselves and future generations. By creating a model for
              sustainable investment, we empower individuals to take ownership
              of these important projects and make a lasting contribution to
              their community’s growth.
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
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-primary-500 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
      </div>
    </div>
  );
};

export default OurNeedForCommunity;
