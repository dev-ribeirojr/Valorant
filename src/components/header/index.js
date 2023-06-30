import { HeaderContainer, Content, Separador, Button, Navegar } from "./styles";

import { LogoRiot } from "../icons/LogoRiot";
import { LogoValorant } from "../icons/LogoValorant";
import { LogoValorantIcon } from "../icons/LogoValorantIcon";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Header({ status }) {

    const [largura, setLargura] = useState(window.innerWidth);
    document.body.onresize = () => setLargura(window.innerWidth);

    return (
        <HeaderContainer>
            {status ?
                <Content>
                    <Link to={'/'}>
                        <LogoRiot />
                    </Link>
                    <Separador />
                    <Link to={'/'}>
                        {largura >= 767 ? <LogoValorant /> : <LogoValorantIcon />}
                    </Link>
                </Content>
                :
                <Content>
                    <a href="#home">
                        <LogoRiot />
                    </a>
                    <Separador />
                    <a href="#home">
                        {largura >= 767 ? <LogoValorant /> : <LogoValorantIcon />}
                    </a>
                </Content>
            }
            <Content>
                {status ?
                    <Navegar>
                        <Link to={'/'}>VOLTAR</Link>
                    </Navegar>

                    :
                    <Navegar>
                        <a href="#">ARMAS</a>
                        {largura <= 767 && <Separador />}
                        <a href="#maps">MAPAS</a>
                        {largura <= 767 && <Separador />}
                        <a href="#agentes">AGENTES</a>
                    </Navegar>
                }

                <Button>
                    JOGUE AGORA
                </Button>
            </Content>

        </HeaderContainer>
    )
}