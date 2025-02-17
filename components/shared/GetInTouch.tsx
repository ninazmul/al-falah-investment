import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="relative h-[800px] md:h-[800px] lg:h-[520px] overflow-hidden">
      <div className="absolute flex flex-col-reverse lg:flex-row items-center justify-around p-10 lg:p-20 z-20 gap-12 lg:gap-0 mx-auto w-full">
        <div className="flex justify-center w-full lg:w-1/2 relative">
          <Image
            src="/assets/images/freepik__the-style-is-candid-image-photography-with-natural__99674.png"
            width={500}
            height={500}
            alt="Al Falah Investment logo"
            className="w-full md:w-2/3 z-10"
          />
          <div className="absolute -right-[7%] md:right-[11.5%] lg:right-[8%] -top-[12%] md:-top-[13%] lg:-top-[20%] rounded-none p-20 bg-primary-500 " />
          <div className="absolute -left-[7%] md:left-[11.5%] lg:left-[8%] -bottom-[12%] md:-bottom-[12%] lg:-bottom-[20%] rounded-none p-20 bg-yellow-400 " />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          {/* <h3 className="p-medium-12 md:p-medium-16 text-primary-500">
            A Partnership for
          </h3> */}
          <h1 className="h2-bold">
            Get in <span className="text-primary-500">Touch</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            We invite you to explore our current investment opportunities and
            learn more about how you can contribute to these impactful projects.
            For further information or to discuss investment options, please
            contact us at [email/phone number], or visit our “Investment
            Opportunities” page to get started.
            <br />
            With Al Falah Investment, your investment not only grows your
            wealth—it nurtures communities, builds educational institutions, and
            strengthens the faith. Together, let’s build a future of success,
            guided by Islamic values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
