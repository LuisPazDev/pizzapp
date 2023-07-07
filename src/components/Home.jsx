import { Container } from "react-bootstrap";
import { HomeMainCard } from "./HomeMainCard";
import { HomeSecondary } from "./HomeSecondary";
import { HomeBanner } from "./HomeBanner";

export const Home = () => {
  return (
    <Container fluid>
      <HomeMainCard />
      <HomeSecondary />
      <HomeBanner />
    </Container>
  );
};
