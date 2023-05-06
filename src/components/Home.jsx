import { Container } from "react-bootstrap"
import { HomeHeader } from "./HomeHeader"
import { HomeMainCard } from "./HomeMainCard"
import { HomeCatering } from "./HomeCatering"
import { HomeFooterCard } from "./HomeFooterCard"
import { HomeBanner } from "./HomeBanner"

export const Home = () => {
    return (
        <Container fluid>
            <HomeHeader />
            <HomeMainCard />
            <HomeCatering />
            <HomeBanner />
        </Container>
    )
}
