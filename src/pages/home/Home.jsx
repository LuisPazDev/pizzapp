import {
  HomeHeader,
  AboutCard,
  DeliveryCard,
  HomeFooter,
  HomeMenuCarousel,
  ReservationCard,
  TestimonialsCard,
  OurStrengthCard,
} from "./sections";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMenuCarousel />
      <OurStrengthCard />
      <DeliveryCard />
      <ReservationCard />
      <TestimonialsCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
