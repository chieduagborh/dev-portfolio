import Section from "./Section";
export default function Hero() {
  return (
    <Section id="home">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Profile card */}
        <aside className={`max-w-sm`}>
          <div className="relative">
            <img className="w-full" src={"/assets/container.png"} />
            <div className="absolute top-[6%] right-[2%] flex flex-col items-center text-center text-off-white-color">
              <div
                className="h-24 w-24 rounded-full ring-4 ring-primary-color/40 overflow-hidden mb-4 bg-foreground/10"
                aria-hidden
              >
                <img
                  src="/assets/profile.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-2xl">Chiedu Agborh</p>
              <p className="text-sm opacity-80">Full-Stack Developer</p>

              <div className="flex flex-col w-[75%] mt-4 gap-y-2">
                <div className="flex gap-x-4 justify-start">
                  <img src={"/assets/icon-mail.svg"} />
                  <a href="mailto:chiedu.agborh@gmail.com">
                    chiedu.agborh@gmail.com
                  </a>
                </div>

                <div className="flex gap-x-4 justify-start">
                  <img src={"/assets/icon-map-pin.svg"} />
                  <p>London, UK</p>
                </div>

                <div className="flex gap-x-4 justify-start">
                  <img src={"/assets/icon-briefcase.svg"} />
                  <p>Full-time / Contract</p>
                </div>
              </div>

              {/* use an array of skill instead */}
              <div className="flex flex-wrap justify-center gap-2 mt-5 w-[70%]">
                {["HTML", "CSS", "JavaScript", "React", "TypeScript"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-full bg-secondary-color text-background"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Center: Headline + copy + CTA */}
        <div className="text-left">
          <div className="h1-holder">
            <span className="text-secondary-color">{"<h1>"}</span>
            <h1 className="mx-2 text-[2.15rem] leading-11 text-off-white-color">
              Hey
              <br />
              I'm <span className="text-primary-color">Chiedu Agborh</span>,
              Full-stack developer
            </h1>
            <span className="text-secondary-color">{"</h1>"}</span>
          </div>

          <div className="p-holder mt-8">
            <span className="text-secondary-color">{"<p>"}</span>
            <p className="mx-4 my-2 text-off-white-color text-sm text-justify">
              From rapid prototypes to production-ready apps, I focus on
              accessibility, performance, and a seamless developer experience. I
              craft web experiences that are both impactful and user-friendly.
              If you're looking for a developer who gets things done, you've
              found one.
            </p>
            <span className="text-secondary-color">{"</p>"}</span>
          </div>

          <div className="mt-7 flex gap-3 justify-center capitalize items-center hidden">
            <h3 className="text-3xl text-primary-color">Get in touch</h3>
            <img src={"/assets/icon-mail-dark.svg"} />
          </div>
        </div>

        {/* Right: Stats */}
        <div className="relative px-10 md:px-0 md:w-[77%] md:mx-auto">
          <img className="w-full" src={"/assets/highlights-bg.png"} />

          <div className="highlights absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-10">
            <div className="flex gap-x-6 text-secondary-color items-center">
              <span
                aria-label="Online"
                role="status"
                className="relative inline-flex"
              >
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-6 w-6 rounded-full bg-emerald-500 ring-2 ring-white" />
              </span>
              <p className="text-off-white-color">
                Open to
                <br />
                Work
              </p>
            </div>

            <div className="flex gap-x-6 text-secondary-color">
              <div className="text-4xl">8+</div>
              <p className="text-off-white-color">
                CMS
                <br />
                Builds
              </p>
            </div>

            <div className="flex gap-x-6 text-secondary-color">
              <div className="text-4xl">6+</div>
              <p className="text-off-white-color">
                React
                <br />
                Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
