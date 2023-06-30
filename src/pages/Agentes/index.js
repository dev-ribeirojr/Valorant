import {
    Container,
    Content,
    Img,
    Titulo,
    Name,
    Description,
    ContentImg,
    ContentRepetido,
    Habilidade,
    ContentHabilidades,
    ContainerHabilidades
} from './styles.js';
import Header from '../../components/header/index.js';

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function Agentes() {

    const { uuid } = useParams();
    const [personagem, setPersonagem] = useState([]);
    const [funcao, setFuncao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);

    useEffect(() => {

        async function loadPerfil() {
            const response = await api.get(`agents/${uuid}?language=pt-BR`);
            setPersonagem(response?.data.data);
            setFuncao(response?.data.data.role);
            setHabilidades(response?.data.data.abilities);
        }

        loadPerfil();
    }, [])

    return (
        <Container>
            <Header status={true} />
            <ContentImg background={funcao.displayIcon}>
                <Content>
                    <Name align='end'>
                        {personagem.displayName}
                    </Name>
                    <Titulo
                        align='end'
                        marginBottom='1.6rem'
                    >// BIOGRAFIA</Titulo>
                    <Description>
                        {personagem.description}
                    </Description>
                </Content>

                <Img src={personagem.fullPortrait} />

                <Content
                    visible='none'
                >
                    <Titulo>// FUNÇÃO</Titulo>
                    <Name
                        align='start'
                    >
                        {funcao.displayName}
                    </Name>
                    <Description>
                        {funcao.description}
                    </Description>
                </Content>
            </ContentImg>
            <ContentRepetido
                visible='none'
            >
                <Titulo>// FUNÇÃO</Titulo>
                <Name
                    align='start'
                >
                    {funcao.displayName}
                </Name>
                <Description>
                    {funcao.description}
                </Description>
            </ContentRepetido>

            <ContainerHabilidades>
                <Content style={{
                    maxWidth: 1300,
                    margin: 'auto'
                }}>
                    <Name>
                        Habilidades
                    </Name>
                    <ContentHabilidades>
                        {habilidades.map((item) => (
                            <Habilidade key={item.slot} background={item.displayIcon}>
                                <Titulo>
                                    {item.displayName}
                                </Titulo>
                                <Description>
                                    {item.description}
                                </Description>
                            </Habilidade>
                        ))}
                    </ContentHabilidades>
                </Content>
            </ContainerHabilidades>

        </Container>
    )
}