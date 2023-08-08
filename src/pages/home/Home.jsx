import { HomeHeader, HomeMain, HomeBanner, HomeFooter } from "./sections/views";
import { HomeIntro } from "./sections/views/HomeIntro";
import { AboutCard, SeeMenuCard } from "./sections/components";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeHeader />
      <HomeBanner />
      <SeeMenuCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
