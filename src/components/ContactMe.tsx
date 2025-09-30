import ContactForm from "./ContactForm";
import Section from "./Section";

export default function ContactMe() {
  const year = new Date().getFullYear();

  return (
    <Section id="contact">
      <div className="grid gap-8 items-start">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-5xl">Contact</h2>

          <img
            src={"/assets/line.svg"}
            className="w-[70%] md:w-[23%] mx-auto h-auto mt-4 mb-2"
            aria-hidden
          />
          <p>Currently available for work</p>

          <div className="mt-14 relative text-center">
            <img
              src={"/assets/button.png"}
              className="w-full mx-auto h-auto md:w-[60%]"
              aria-hidden
            />
            <h4 className="w-full text-2xl md:text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Send Me An Enquiry
            </h4>
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
