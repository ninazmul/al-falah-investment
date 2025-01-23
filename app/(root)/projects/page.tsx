import GetInTouchToLearnMore from "@/components/shared/GetInTouchToLearnMore";
import ImpactOfInvestment from "@/components/shared/ImpactOfInvestment";
import IslamicEducation from "@/components/shared/IslamicEducation";
import JoinUsForFuture from "@/components/shared/JoinUsForFuture";
import ShariaCompliant from "@/components/shared/ShariaCompliant";

export default function ProjectPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h3 className="h1-bold text-center sm:text-left">
            Our Ongoing Projects
          </h3>
        </div>
      </section>
      <section className="bg-gray-50">
        <IslamicEducation />
      </section>
      <section className="bg-gray-50">
        <ShariaCompliant />
      </section>
      <section className="bg-gray-50">
        <ImpactOfInvestment />
      </section>
      <section className="bg-gray-50">
        <GetInTouchToLearnMore />
      </section>
      <section className="bg-gray-50">
        <JoinUsForFuture />
      </section>
    </>
  );
}
