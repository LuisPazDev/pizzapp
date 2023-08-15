import {
  HomeHeader,
  AboutCard,
  DeliveryCard,
  HomeFooter,
  HomeMenuCarousel,
  ReservationCard,
} from "./sections";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMenuCarousel />
      <DeliveryCard />
      <ReservationCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
