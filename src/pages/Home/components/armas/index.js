import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Card, Name, Img } from './styles';

import api from '../../../../services/api';
import { Loading } from "../../../../components/styles/styles";

import { BiLoaderCircle } from 'react-icons/bi';

export default function Armas() {

    const [armas, setArmas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadArmas() {
            const response = await api.get('weapons?language=pt-BR')
                .then((doc) => {
                    setArmas(doc.data.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                    setLoading(false)
                })
        }
        loadArmas();
    }, [])

    if (loading) {
        return (
            <Container>

                <Card >
                    <Name>
                        Carregando...
                    </Name>
                    <Loading>
                        <BiLoaderCircle color="#FFF" size={25} />
                    </Loading>

                </Card>
                <Card >
                    <Name>
                        Carregando...
                    </Name>
                    <Loading>
                        <BiLoaderCircle color="#FFF" size={25} />
                    </Loading>

                </Card>
                <Card >
                    <Name>
                        Carregando...
                    </Name>
                    <Loading>
                        <BiLoaderCircle color="#FFF" size={25} />
                    </Loading>

                </Card>

            </Container>
        )
    }

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