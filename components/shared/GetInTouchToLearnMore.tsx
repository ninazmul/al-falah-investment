import Image from "next/image";

const GetInTouchToLearnMore = () => {
  return (
    <div className="relative h-[730px] md:h-[800px] lg:h-[500px] overflow-hidden">
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
            Get in Touch to
          </h3>
          <h1 className="h2-bold">
            Learn <span className="text-primary-500">More</span>
          </h1>
          <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
            We invite you to explore the exciting investment opportunities
            available with Al Falah Investment Pty Ltd. Together, we can build
            the schools of tomorrow and create a lasting legacy of education and
            faith.
            <br />
            <br />
            For more information or to discuss investment options, please
            contact us at [email/phone number], or visit our “Investment
            Opportunities” page to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchToLearnMore;
