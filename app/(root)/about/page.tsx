import JoinUsLegacy from "@/components/shared/JoinUsLegacy";
import OurCommitment from "@/components/shared/OurCommitment";
import OurFocus from "@/components/shared/OurFocus";
import OurLegacyAndVision from "@/components/shared/OurLegacyAndVision";
import OurNeedForCommunity from "@/components/shared/OurNeedForCommunity";
import OurStory from "@/components/shared/OurStory";
import OurVisionForAFI from "@/components/shared/OurVisionForAFI";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h1 className="h1-bold text-center sm:text-left">About Us</h1>
        </div>
      </section>
      <section className="bg-gray-50">
        <OurStory />
      </section>
      <section className="bg-gray-50">
        <OurFocus />
      </section>
      <section className="bg-gray-50">
        <OurVisionForAFI />
      </section>
      <section className="bg-gray-50">
        <OurNeedForCommunity />
      </section>
      <section className="bg-gray-50">
        <OurCommitment />
      </section>
      <section className="bg-gray-50">
        <OurLegacyAndVision />
      </section>
      <section className="bg-gray-50">
        <JoinUsLegacy />
      </section>
    </>
  );
}
