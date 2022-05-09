import React from "react";
import Groups from "./groups";
import Header from "./header";
import LandingHero from "./landing-hero";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <LandingHero />
      <Groups />
    </div>
  );
}
