import { Dot } from "lucide-react";
import Image from "next/image";

const IslamicEducation = () => {
  return (
    <div>
      <div className="px-10 lg:px-20 pt-10 lg:pt-20 pb-4 lg:pb-10 z-20 gap-12 lg:gap-0 mx-auto w-full space-y-4">
        <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
          Invitation to Invest in Islamic School Projects with Al Falah
          Investment Pty Ltd
        </h3>
        <h1 className="h2-bold">
          Empower the Future with{" "}
          <span className="text-primary-500">
            Your Investment in Islamic Education
          </span>
        </h1>
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          At Al Falah Investment Pty Ltd, we are proud to offer a unique
          opportunity for you to be part of something truly
          transformative—investing in the development and expansion of Islamic
          schools. With your support, we can build institutions that not only
          provide high-quality education but also instill Islamic values in the
          hearts and minds of the next generation.
          <br />
          As an Islamic investment company committed to Sharia-compliant
          practices, we offer ethical investment opportunities that contribute
          to the growth of Islamic schools. These institutions play a vital role
          in educating young Muslims, preparing them for a successful future
          while nurturing their faith, character, and community spirit.
        </p>
        <div className="flex justify-center w-full relative p-10">
          <Image
            src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__99675.png"
            width={500}
            height={500}
            alt="Al Falah Investment logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[0%] md:right-[15%] lg:right-[15.5%] -top-[0%] md:-top-[0%] lg:-top-[0%] rounded-none p-10 lg:p-20 bg-primary-500 " />
          <div className="absolute -left-[0%] md:left-[15%] lg:left-[15.5%] -bottom-[0%] md:-bottom-[0%] lg:-bottom-[0%] rounded-none p-10 lg:p-20 bg-yellow-400 " />
        </div>

        <div className="w-full space-y-4">
          <p className="p-regular-16 md:p-regular-20 font-semibold text-muted-foreground">
            Why Invest in Islamic School Projects?
          </p>
          <ul className="mb-10 md:mb-14">
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Building Future Leaders
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Your investment will help create an environment that empowers
                young Muslims to excel academically and spiritually, equipping
                them with the tools they need to lead and serve their
                communities with integrity and wisdom.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Building Centres of Learning
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Your investment will directly support the construction of
                modern, state-of-the-art Islamic schools. These institutions
                will provide academic excellence alongside a comprehensive
                Islamic education, allowing students to grow spiritually,
                intellectually, and socially. By supporting the development of
                these schools, you are laying the foundation for future leaders
                who will be equipped to serve both their community and society
                at large.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Creating Spaces for Worship and Community Engagement
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Masjids are not just places of prayer—they are the heart of the
                Muslim community. Investing in masjid projects means helping
                create spaces where Muslims can gather for worship, spiritual
                growth, education, and social activities. These masjids will
                serve as hubs for community building, interfaith dialogue, and
                educational programs for all ages.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">
                  Fostering a Strong Community
                </h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Islamic schools are more than just places of learning—they are
                hubs of community development, bringing families together and
                fostering a sense of belonging, faith, and shared purpose. Your
                investment will help strengthen this important aspect of the
                Muslim community.
              </p>
            </li>
            <li className="mb-3 py-3">
              <div className="flex items-center">
                <Dot className="text-primary-500 size-8" />
                <h3 className="body-2 ml-5 font-semibold">Long-Term Impact</h3>
              </div>
              <p className="body-2 mt-3 text-n-4 text-muted-foreground">
                Both Islamic schools and masjids have a transformative impact on
                the community. By supporting the growth of these institutions,
                you are ensuring that future generations will have access to
                high-quality education and spiritual guidance, both of which are
                essential for developing well-rounded individuals. Your
                investment will leave a legacy of knowledge, faith, and
                community for years to come.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IslamicEducation;
