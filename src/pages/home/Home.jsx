import {
  HomeHeader,
  AboutCard,
  DeliveryCard,
  HomeFooter,
  MenuCarousel,
  ReservationCard,
} from "./sections";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <MenuCarousel />
      <DeliveryCard />
      <ReservationCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
