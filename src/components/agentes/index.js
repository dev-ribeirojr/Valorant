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