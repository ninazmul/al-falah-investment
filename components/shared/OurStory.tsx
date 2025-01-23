import Image from "next/image";

const OurStory = () => {
  return (
    <div className="relative h-[1570px] md:h-[1300px] lg:h-[1070px] overflow-hidden">
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
            The Creation of Al Falah Investment Pty Ltd
          </h3>
          <h1 className="h2-bold">
            Building a Legacy of{" "}
            <span className="text-primary-500">
              Faith, Education, and Community
            </span>
          </h1>
          <div className="space-y-4">
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Al Falah Investment Pty Ltd was created out of a deep-seated
              belief in the power of education and faith to transform lives and
              communities. As Muslims living in Australia, we recognized that
              the need for robust, high-quality Islamic educational institutions
              and places of worship—masjids—was growing at an unprecedented
              rate. At the same time, we saw a growing disconnect between the
              demand for these essential community structures and the resources
              available to build and sustain them.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              Islamic schools and masjids are more than just buildings—they are
              the heart of the Muslim community. They provide not only the
              foundation for spiritual growth but also the tools for academic
              excellence, leadership, and community engagement. However, despite
              the increasing need for these institutions, many of the projects
              designed to build and expand them faced significant financial
              barriers.
            </p>
            <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
              This gap inspired the founding of Al Falah Investment Pty Ltd. We
              envisioned an ethical, Sharia-compliant investment company that
              would provide a platform for the community to come together and
              contribute towards the development of these vital institutions.
              Through this initiative, we sought to create a sustainable model
              for funding Islamic school and masjid projects, ensuring that
              these institutions would continue to serve future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
