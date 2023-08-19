import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

// components
import Header from '../../components/header/index.js';
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

import { Loading } from "../../components/styles/styles";

//icons
import { BiLoaderCircle } from "react-icons/bi";


export default function Agentes() {

    const { uuid } = useParams();
    const [personagem, setPersonagem] = useState([]);
    const [funcao, setFuncao] = useState([]);
    const [habilidades, setHabilidades] = useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadPerfil() {
            const response = await api.get(`agents/${uuid}?language=pt-BR`)
                .then((doc) => {

                    setPersonagem(doc.data.data);
                    setFuncao(doc.data.data.role);
                    setHabilidades(doc.data.data.abilities);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        }

        loadPerfil();
    }, [])

    if (loading) {

        return (
            <Container>
                <Header status={true} />
                <ContentImg>
                    <Titulo>//Carregando...</Titulo>
                </ContentImg>
                <ContainerHabilidades
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <Loading>
                        <BiLoaderCircle size={25} color="#030F3B" />
                    </Loading>
                </ContainerHabilidades>
            </Container>
        )
    }

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


            <ContainerHabilidades>
                <Content style={{
                    maxWidth: 1300,
                    margin: 'auto'
                }}>
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