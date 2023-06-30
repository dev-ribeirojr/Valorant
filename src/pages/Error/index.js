import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from '../../components/header'
import {
    Container,
    Img,
    Titulo,
    ContainerImg
} from './styles';

export default function Error() {

    const [agents, setAgents] = useState([]);
    const [agentEscolido, setAgenteEscolido] = useState([]);

    useEffect(() => {

        async function loadPersonagens() {
            const response = await api.get('agents');
            setAgents(response.data.data);

            setAgenteEscolido(response.data.data[Math.floor(Math.random() * response.data.data.length)])
        }
        loadPersonagens();

    }, []);

    console.log(agentEscolido)

    return (
        <Container>
            <Header status={true} />
            <ContainerImg>
                <Img src={agentEscolido.fullPortrait} />
            </ContainerImg>
            <Titulo>
                404
            </Titulo>
            <p>Ops!! Página não encontrada</p>
            <Link
                to={'/'}
                className='link'
            >PÁGINA INICIAL</Link>

        </Container>
    )
}