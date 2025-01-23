import ContactInformation from "@/components/shared/ContactInformation";
import { ContactUs } from "@/components/shared/ContactUs";

export default async function ContactPage() {
  return (
    <>
      <section className="bg-[#f6eedd] bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper ">
          <h1 className="h1-bold text-center sm:text-left">
            Contact Us
          </h1>
          <h2 className="h2-bold text-center sm:text-left">
            Al Falah Investment Pty Ltd
          </h2>
        </div>
      </section>
      <section className="bg-gray-50 p-10 lg:p-20 space-y-8">
        <p className="p-regular-16 md:p-regular-20 text-muted-foreground">
          We would love to hear from you! Whether you have questions about our
          investment opportunities, want to learn more about our projects, or
          are ready to get involved, our team is here to assist you.
        </p>
      </section>
      <section className="bg-gray-50">
        <ContactInformation />
      </section>
      <section className="bg-gray-50 p-10 lg:p-20 space-y-8">
        <ContactUs />
      </section>
    </>
  );
}
