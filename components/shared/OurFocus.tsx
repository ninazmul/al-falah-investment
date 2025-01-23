import Image from "next/image";

const OurFocus = () => {
  return (
    <div className="relative h-[1400px] md:h-[1200px] lg:h-[1000px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Why We Chose to Focus on
          </h3>
          <h1 className="h2-bold">
            Islamic Schools{" "}
            <span className="text-primary-500">and Masjids</span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Our journey began with a recognition of the growing demand for
              Islamic education and worship spaces across Australia. With an
              increasing number of Muslim families seeking access to quality
              education grounded in Islamic values, we understood that it was
              crucial to establish more Islamic schools. These institutions
              would serve as sanctuaries of knowledge, where children could
              learn both their academic subjects and the teachings of Islam.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Similarly, we recognized the importance of masjids in the Muslim
              community—not only as places for prayer but also as community
              Centres that foster unity, education, and social engagement. With
              many existing masjids struggling to meet the needs of growing
              congregations, and new ones being required to serve expanding
              communities, we knew there was a pressing need to develop and
              expand these spaces.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              However, the challenges of financing such large-scale
              projects—particularly without relying on interest-based
              financing—posed a significant barrier. This is where we saw an
              opportunity: by creating Al Falah Investment, we could provide a
              structured and sustainable solution for raising funds through
              ethical, Sharia-compliant investment practices.
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

export default OurFocus;
