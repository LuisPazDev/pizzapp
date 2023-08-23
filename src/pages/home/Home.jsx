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
      <DeliveryCard />
      <ReservationCard />
      <OurStrengthCard />
      <TestimonialsCard />
      <AboutCard />
      <HomeFooter />
    </>
  );
};
