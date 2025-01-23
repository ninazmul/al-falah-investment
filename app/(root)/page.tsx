import Hero from "@/components/shared/Hero";
import ShortAbout from "@/components/shared/ShortAbout";
import { getAllBanner } from "@/lib/actions/banner.actions";
import HowWeWork from "@/components/shared/HowWeWork";
import OurVision from "@/components/shared/OurVision";
import JoinInLegacy from "@/components/shared/JoinInLegacy";
import GetInTouch from "@/components/shared/GetInTouch";

export default async function Home() {
  const banners = await getAllBanner();

  return (
    <>
      <section className="">
        <Hero banners={banners} />
      </section>
      <section className="bg-gray-50">
        <ShortAbout />
      </section>
      <section className="bg-gray-50">
        <OurVision />
      </section>
      <section className="bg-gray-50">
        <HowWeWork />
      </section>
      <section className="bg-gray-50">
        <JoinInLegacy />
      </section>
      <section className="bg-gray-50">
        <GetInTouch />
      </section>
    </>
  );
}
