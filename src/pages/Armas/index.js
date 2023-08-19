import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/header";

import {
    Container,
    ContentArma,
    Img,
    Name,
    Skins,
    Card,
    NameSkin,
    Titulo,
    ContainerImg
} from './styles';

export default function Armas() {

    const { uuid } = useParams();

    const [arm, setArm] = useState([]);
    const [skins, setSkins] = useState([]);

    useEffect(() => {

        async function loadArmas() {

            const response = await api.get(`weapons/${uuid}`);
            setArm(response?.data.data);
            setSkins(response?.data.data.skins);
        }
        loadArmas();

    }, [])

    return (
        <Container>
            <Header status={true} />
            <ContentArma>
                <ContainerImg>
                    <Name>{arm.displayName}</Name>
                    <Img src={arm.displayIcon} />
                </ContainerImg>
                <Titulo>SKINS</Titulo>
                <Skins>
                    {skins.map((arma) => (
                        <Card key={arma.uuid}>
                            <NameSkin>
                                {arma.displayName}
                            </NameSkin>
                            <Img src={arma.displayIcon} />
                        </Card>
                    ))}
                </Skins>
            </ContentArma>
        </Container>
    )
}