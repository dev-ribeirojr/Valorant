import { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import {
    Container,
    Card,
    Name,
    Img
} from './styles';

export default function Armas() {

    const [armas, setArmas] = useState([]);

    useEffect(() => {
        async function loadArmas() {
            const response = await api.get('weapons?language=pt-BR');
            setArmas(response.data.data);
        }
        loadArmas();
    }, [])

    return (
        <Container>
            {armas.map((arma) => (
                <Link key={arma.uuid} to={`armas/${arma.uuid}`}>
                    <Card >
                        <Name>
                            {arma.displayName}
                        </Name>
                        <Img src={arma.displayIcon} />
                    </Card>
                </Link>
            ))}
        </Container>
    )
}