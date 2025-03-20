import Invite from "@/components/about/invite";
import OurLogo from "@/components/about/logo";
import OurValue from "@/components/about/our-value";
import Story from "@/components/about/story";
import OurTeam from "@/components/about/team";
import React from "react";

const About = () => {
  return (
    <>
      <Story />
      <OurLogo />
      <OurValue />
      <OurTeam />
      <Invite />
    </>
  );
};

export default About;
