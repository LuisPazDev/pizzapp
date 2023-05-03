import { Container } from "react-bootstrap"
import { HomeHeader } from "./HomeHeader"
import { HomeMainCard } from "./HomeMainCard"
import { HomeMenuCard } from "./HomeMenuCard"
import { HomeFooterCard } from "./HomeFooterCard"

export const Home = () => {
    return (
        <Container fluid>
            <HomeHeader />
            <HomeMainCard />
            <HomeMenuCard />
            <HomeFooterCard />
        </Container>
    )
}
