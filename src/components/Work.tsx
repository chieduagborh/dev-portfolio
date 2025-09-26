import { EmblaOptionsType } from "embla-carousel";
import Section from "./Section";
import Carousel from "./Carousel";
export default function Works() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const projectList = [
    {
      id: "1",
      title: "EO Charging",
      src: "/assets/eo-charging.png",
      alt: "EO Charging screenshot",
      desc: "Built a custom Storyblok CMS with Next.js and Typescript, adding analytics tracking and a full TDD setup.",
    },
    {
      id: "2",
      title: "Molton Brown",
      src: "/assets/molton-brown.png",
      alt: "Molton Brown screenshot",
      desc: "Guided fragrance finder built for high-traffic retail.",
    },
    {
      id: "3",
      title: "Natter",
      src: "/assets/natter.png",
      alt: "Natter screenshot",
      desc: "Delivered new Webflow pages and templates to refresh the site and improve UX.",
    },
    {
      id: "4",
      title: "Zoopla",
      src: "/assets/zoopla.png",
      alt: "Zoopla screenshot",
      desc: "Enhanced core platform with React and GraphQL, improving performance and scalability.",
    },
  ];

  return (
    <Section id="work" className="bg-secondary-shade-color">
      <div className="mb-14">
        <h2 className="text-5xl text-center">Work</h2>
        <img
          src={"/assets/line.svg"}
          className="w-[70%] md:w-[23%] mx-auto h-auto mt-4 mb-2"
          aria-hidden
        />
      </div>
      <Carousel items={projectList} options={OPTIONS} />
    </Section>
  );
}
