"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("about");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About us</h2>
          <p className="text-base lg:text-lg font-bold">
            At SiteCraftDynamics, we are more than a web development agency – we are creators of stunning websites, your gateway to an online presence that captivates. Renowned as a top-rated agency, our expertise lies in crafting websites that not only meet but exceed industry standards. From sleek designs to seamless functionality, we specialize in bringing your digital vision to life. Elevate your online identity with SiteCraftDynamics, your trusted partner in the world of web development excellence.
          </p>
          {/* Remove the tab buttons and related content */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
