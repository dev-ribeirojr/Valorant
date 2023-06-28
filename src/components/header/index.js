import { HeaderContainer, Content, Separador, Button, Navegar } from "./styles";

import { LogoRiot } from "../icons/LogoRiot";
import { LogoValorant } from "../icons/LogoValorant";
import { LogoValorantIcon } from "../icons/LogoValorantIcon";

import { useState } from "react";

export default function Header() {

    const [largura, setLargura] = useState(window.innerWidth);

    document.body.onresize = () => setLargura(window.innerWidth);

    return (
        <HeaderContainer>
            <Content>
                <LogoRiot />
                <Separador />
                {largura >= 767 ? <LogoValorant /> : <LogoValorantIcon />}
            </Content>
            <Content>
                <Navegar>
                    <a href="#">AGENTES</a>
                    {largura <= 767 && <Separador />}
                    <a href="#">ARMAS</a>
                    {largura <= 767 && <Separador />}
                    <a href="#">MAPAS</a>
                </Navegar>
                <Button>
                    JOGUE AGORA
                </Button>
            </Content>

        </HeaderContainer>
    )
}