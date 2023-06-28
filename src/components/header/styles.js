import styled from "styled-components";
const corPrimaria = '#FF4655';
const corSecundaria = '#FF7461';

export const HeaderContainer = styled.header`
    height: 4rem;
    width: 100%;
    background-color: #121212;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem 1.5rem;
    box-shadow: 0px 2px 10px #0000007a;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;

    z-index: 1000;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    svg{
        cursor: pointer;
        padding: 4px;
    }
    svg:hover{
        path{
            fill: ${corPrimaria};
        }
    }  
`;
export const Separador = styled.div`
    width: 1px;
    height: 2rem;
    background-color: #FFF;
`;
export const Button = styled.button`
    background: linear-gradient(45deg, ${corPrimaria}, ${corSecundaria});
    height: 2.5rem;
    width: 7rem;
    border-radius: 1rem;
    font-weight: bold;

    &:hover{
        background: linear-gradient(45deg, ${corSecundaria}, ${corPrimaria});
        color: #FFF;
    }
`;
export const Navegar = styled.nav`
        
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 767px){
        position: fixed;
        left: 0;
        top: 4rem;
        right: 0;
        background-color: #000;
        box-shadow: 0px 2px 10px #0000007a;
    }
    a{
        color: #FFF;
        padding: 0.5rem;
        &:hover{
            color: ${corPrimaria};
        }
    }

`;

