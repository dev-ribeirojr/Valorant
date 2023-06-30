import { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/header';
import CallOuts from '../../components/callOuts';
import {
    Container,
    Mapa,
    ContentMapa,
    Titulo,
    Cordenadas,
    Content,
    Descricao,
    Texto
} from './styles';


export default function Maps() {

    const { uuid } = useParams();
    const [mapa, setMapa] = useState([]);

    useEffect(() => {
        async function loadMaps() {
            const response = await api.get(`maps/${uuid}`);
            setMapa(response?.data.data);
        }
        loadMaps();
    }, [])

    if (mapa.callouts == null || mapa.displayIcon == null) {
        return (
            <Container
                background={mapa.splash}
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

            >
                <Header status={true} />
                <Titulo>
                    {mapa.displayName}
                </Titulo>
                <Texto>
                    <Descricao>
                        Este mapa ainda não possúi dados a ser exibido
                    </Descricao>
                </Texto>
                <Link to={'/'} className='link'>Voltar</Link>
            </Container>
        )
    } else {
        return (
            <Container background={mapa.splash}>
                <Header status={true} />
                <ContentMapa>
                    <Mapa src={mapa.displayIcon} />
                </ContentMapa>
                <Titulo>
                    {mapa.displayName}
                </Titulo>

                <Content>
                    <Texto>
                        <Cordenadas>Cordenadas: {mapa.coordinates}</Cordenadas>
                        <Descricao>
                            Você provavelmente já deve saber, mas os mapas do Valorant são divididos em pequenas regiões que foram apelidadas pela comunidade de jogadores. Cada área recebeu um nome, ou seja, uma “callout”. As callouts facilitam a comunicação entre os players e auxiliam a criação de estratégias, são elas..
                        </Descricao>
                    </Texto>
                    <CallOuts uuid={uuid} />
                </Content>
            </Container>
        )
    }


}