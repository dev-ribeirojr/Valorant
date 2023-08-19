import { useState, useEffect } from 'react';

import { Container, Card, Name, Fundo, } from './styles';
import { Link } from 'react-router-dom';

import api from '../../../../services/api';
import { Loading } from '../../../../components/styles/styles';

import { BiLoaderCircle } from 'react-icons/bi';

export default function Agentes() {

    const [agentes, setAgentes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAgentes() {
            const response = await api.get(`agents?isPlayableCharacter=true&language=pt-BR`)
                .then((doc) => {
                    setAgentes(doc.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        }
        loadAgentes()
    }, []);

    if (loading) {
        return (
            <Container>
                <Card
                    style={{
                        height: 200
                    }}
                >
                    <Loading>
                        <BiLoaderCircle color='#FFF' size={25} />
                    </Loading>
                    <Name
                        style={{
                            display: 'block',
                            textAlign: 'center'
                        }}
                    >
                        Carregando...
                    </Name>
                </Card>
                <Card
                    style={{
                        height: 200
                    }}
                >
                    <Loading>
                        <BiLoaderCircle color='#FFF' size={25} />
                    </Loading>
                    <Name
                        style={{
                            display: 'block',
                            textAlign: 'center'
                        }}
                    >
                        Carregando...
                    </Name>
                </Card>
                <Card
                    style={{
                        height: 200
                    }}
                >
                    <Loading>
                        <BiLoaderCircle color='#FFF' size={25} />
                    </Loading>
                    <Name
                        style={{
                            display: 'block',
                            textAlign: 'center'
                        }}
                    >
                        Carregando...
                    </Name>
                </Card>

            </Container>
        )
    }

    return (
        <Container>
            {agentes.map((perfil) => (
                <Link to={`/agents/${perfil.uuid}`} key={perfil.uuid}>
                    <Fundo
                        corUm={perfil.backgroundGradientColors[0]}
                        corDois={perfil.backgroundGradientColors[1]}
                        corTres={perfil.backgroundGradientColors[2]}
                        corQuatro={perfil.backgroundGradientColors[3]}
                    >
                        <Card
                            background={perfil.background}
                            corUm={perfil.backgroundGradientColors[0]}
                        >
                            <img src={perfil.bustPortrait} />
                            <Name
                                corUm={perfil.backgroundGradientColors[0]}
                                corQuatro={perfil.backgroundGradientColors[3]}
                            >
                                {perfil.displayName}
                            </Name>
                        </Card>
                    </Fundo>
                </Link>
            ))}

        </Container>
    )
}