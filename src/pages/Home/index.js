import Video from "../../components/video";
import Mapas from "../../components/mapas";
import Agentes from "../../components/agentes";

import {
    Titulo,
    Sobre
} from './styles'

export default function Home() {
    return (
        <div>
            <Video />
            <Sobre id="maps">
                <Titulo>MAPAS</Titulo>
                <p>
                    O modo competitivo de Valorant, FPS da Riot Games, atualmente é disputado nos mapas Ascent, Bind, Haven, Icebox e Split. Cada cenário tem uma variedade de pontos estratégicos com nomes de referências, as chamadas call-outs. É importante que os jogadores conheçam esses locais e seus apelidos, pois esses termos são muito usados ao jogar e se comunicar com o time.
                </p>
            </Sobre>
            <Mapas />
            <Sobre id="agentes">
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