import {
  HomeHeader,
  AboutCard,
  DeliveryCard,
  HomeFooter,
  HomePizzaCarousel,
  ReservationCard,
  HomeDrinksCarousel,
  HomeDessertsCarousel,
} from "./sections";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomePizzaCarousel />
      <HomeDrinksCarousel />
      <HomeDessertsCarousel />
      <ReservationCard />
      <DeliveryCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
