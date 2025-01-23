import Image from "next/image";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const OurVision = () => {
  return (
    <div className="relative bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center h-[1250px] md:h-[1170px] lg:h-[900px] overflow-hidden">
      <div className="absolute flex flex-col lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            The Cornerstones of Our Community
          </h3>
          <h1 className="h2-bold">
            Our <span className="text-primary-500">Vision</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            Building a Brighter Future Through Faith and Knowledge
          </p>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <BsMoonStarsFill className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Sharia-Compliant Investment
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                At Al Falah Investment, all of our investment opportunities are
                fully aligned with the principles of Islamic finance. We ensure
                that every project we fund adheres to ethical guidelines,
                avoiding interest-based practices and ensuring that your
                investment contributes to causes that bring about long-term
                positive change.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <FaUsers className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Empowering Communities
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Our projects are driven by a deep commitment to community
                development. Whether it’s funding the construction of new
                schools or masjids, our aim is to create lasting educational and
                religious institutions that will continue to serve future
                generations. Your investment goes towards fostering educational
                excellence and nurturing the spiritual and social fabric of the
                Muslim community.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <IoMdTrendingUp className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Sustainable Growth
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                We focus on the long-term sustainability of each project,
                ensuring that they are financially viable and capable of
                delivering ongoing benefits to the community. By prioritizing
                high-quality construction, effective management, and impactful
                programs, we aim to build institutions that stand the test of
                time.
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

export default OurVision;
