import { HomeHeader } from "./HomeHeader";
import { HomeMainCard } from "./HomeMainCard";
import { HomeSecondary } from "./HomeSecondary";
import { HomeBanner } from "./HomeBanner";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMainCard />
      <HomeSecondary />
      <HomeBanner />
    </>
  );
};
