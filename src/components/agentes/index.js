import {
    Container,
    Card,
    Name,
    Fundo,
} from './styles';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Agentes() {

    const [agentes, setAgentes] = useState([]);

    useEffect(() => {
        async function loadAgentes() {
            const response = await api.get(`agents?isPlayableCharacter=true&language=pt-BR`);
            setAgentes(response.data.data);
        }
        loadAgentes()
    }, []);

    console.log(agentes)
    return (
        <Container>
            {agentes.map((perfil) => (
                <Link key={perfil.uuid}>
                    <Fundo
                        corUm={perfil.backgroundGradientColors[0]}
                        corDois={perfil.backgroundGradientColors[1]}
                        corTres={perfil.backgroundGradientColors[2]}
                        corQuatro={perfil.backgroundGradientColors[3]}
                    >
                        <Card
                            background={perfil.background}
                            corUm={perfil.backgroundGradientColors[0]}
                            corQuatro={perfil.backgroundGradientColors[3]}
                        >
                            <img src={perfil.bustPortrait} />
                            <Name>
                                {perfil.developerName}
                            </Name>
                        </Card>
                    </Fundo>
                </Link>
            ))}

        </Container>
    )
}