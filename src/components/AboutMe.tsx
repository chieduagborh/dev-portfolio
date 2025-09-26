import Section from "./Section";
export default function AboutMe() {
  return (
    <Section
      id="about"
      className="relative h-[1000px]"
      style={{
        backgroundImage: "url('/assets/about-banner.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="flex flex-col">
          <div className="">
            <div className="relative text-center px-10 mb-8">
              <img
                src={"/assets/button-filled.png"}
                className="w-full mx-auto h-auto md:w-[60%] w-auto"
                aria-hidden
              />
              <h2 className="w-full text-3xl md:text-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                About me
              </h2>
            </div>

            <div className="bg-background rounded-[40px] p-5 welcome-holder">
              <span className="text-secondary-color">{"<p>"}</span>
              <p className="mx-4 my-2 text-off-white-color text-base tracking-wider text-left welcome-copy">
                <span className="text-xl">Welcome!</span>
                <br />I specialize in web development that utilises
                <span> React/Next.js</span>, <span>TypeScript</span>,
                <span> HTML</span> and <span>CSS</span>. I ship robust,
                accessible interfaces and high-performing sites, and I'm
                comfortable owning the full delivery loop-from component design
                and CMS build to analytics, testing, and deployment. I've
                improved site speed, security, and conversion for product and
                marketing teams, partnering closely with designers and
                stakeholders to turn requirements into reliable, maintainable
                code.
              </p>
              <span className="text-secondary-color">{"</p>"}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
