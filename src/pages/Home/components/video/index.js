import { Container, Content, Video, Button } from './styles';
import GameVideo from "../../../../assets/video-full.mp4";
import { LogoValorant } from "../../../../components/icons/LogoValorant";

export default function VideoHeroi() {
    return (
        <Container id='home'>
            <Video autoPlay muted loop>
                <source src={GameVideo} type='video/mp4' />
            </Video>
            <Content>
                <LogoValorant />
                <p>Um jogo de tiro tático 5x5 com personagens originais</p>
                <Button>
                    JOGUE GRÁTIS
                </Button>
            </Content>
        </Container>
    )
}