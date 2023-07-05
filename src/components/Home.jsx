import { Container } from "react-bootstrap";
import { HomeMainCard } from "./HomeMainCard";
import { HomeCatering } from "./HomeCatering";
import { HomeBanner } from "./HomeBanner";

export const Home = () => {
  return (
    <Container fluid>
      <HomeMainCard />
      <HomeCatering />
      <HomeBanner />
    </Container>
  );
};
