import { Container } from "react-bootstrap";
import { HomeHeader, HomeMain, HomeBanner, HomeFooter } from "./sections/views";
import { HomeIntro } from "./sections/views/HomeIntro";

export const Home = () => {
  return (
    <Container style={{ maxWidth: "1200px" }}>
      <HomeIntro />
      <HomeMain />
      <HomeHeader />
      <HomeBanner />
      <HomeFooter />
    </Container>
  );
};
