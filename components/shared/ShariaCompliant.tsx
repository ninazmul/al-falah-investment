import { Dot } from "lucide-react";
import Image from "next/image";

const ShariaCompliant = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1510px] md:h-[1250px] lg:h-[960px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            Sharia-Compliant
          </h3>
          <h1 className="h2-bold">
            Investment <span className="text-primary-500">Opportunities</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            At Al Falah Investment, we ensure that all our projects are fully
            aligned with Islamic principles. Your investment will be used in
            ways that comply with Sharia, avoiding any involvement with interest
            (Riba) or unethical practices. We are committed to transparency,
            ensuring that your funds are utilized in the most effective and
            impactful way possible.
          </p>
          <ul className="mb-10 md:mb-14">
            <p className="p-regular-16 md:p-regular-20 font-bold">
              How You Can Get Involved?
            </p>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Direct Investment in School Construction
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Contribute to the construction and development of new Islamic
                schools that will serve students and families for years to come.
                Your investment will go towards building state-of-the-art
                classrooms, libraries, sports facilities, and more.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Expansion of Existing Schools
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Help us expand and improve existing Islamic schools by
                supporting the development of new facilities, enhancing the
                curriculum, and providing additional resources for students and
                teachers.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Endowment Funds</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Consider investing in endowment funds that will provide ongoing
                financial support for the operation and sustainability of
                Islamic schools, ensuring that these institutions continue to
                thrive long into the future.
              </p>
            </li>
          </ul>
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

export default ShariaCompliant;
