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

import { Loading } from "../../components/styles/styles";

//icons
import { BiLoaderCircle } from "react-icons/bi";

export default function Armas() {

    const { uuid } = useParams();

    const [arm, setArm] = useState([]);
    const [skins, setSkins] = useState([]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadArmas() {

            const response = await api.get(`weapons/${uuid}`)
                .then((doc) => {
                    setArm(doc.data.data);
                    setSkins(doc.data.data.skins);
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
                <Header status={true} />
                <ContentArma>
                    <Card>
                        <Loading style={{
                            flexDirection: 'column'
                        }}>
                            <Titulo
                                style={{ margin: 0 }}
                            >Carregando...</Titulo>
                            <BiLoaderCircle size={25} color="#FFF" />
                        </Loading>
                    </Card>
                </ContentArma>
            </Container>
        )
    }

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