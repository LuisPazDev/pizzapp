import { Container } from "react-bootstrap"
import { HomeMainCard } from "./HomeMainCard"
import { HomeMenuCard } from "./HomeMenuCard"
import { HomeFooterCard } from "./HomeFooterCard"

export const Home = () => {
    return (
        <Container fluid>
            <HomeMainCard />
            <HomeMenuCard />
            <HomeFooterCard />
        </Container>
    )
}
