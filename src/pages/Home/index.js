import Video from "../../components/video";
import Agentes from "../../components/agentes";

import {
    Titulo,
    Sobre
} from './styles'

export default function Home() {
    return (
        <div>
            <Video />
            <Sobre>
                <Titulo>SEUS AGENTES</Titulo>

                <h2>A CRIATIVIDADE É SUA MELHOR ARMA.</h2>
                <p>
                    Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!
                </p>
            </Sobre>
            <Agentes />

        </div>
    )
}