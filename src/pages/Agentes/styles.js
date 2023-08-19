import styled from "styled-components";

const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';

export const Container = styled.section`
    width: 100%;
    color: #FFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 7rem 0 0 0;  
`;
export const ContentImg = styled.section`
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px){
        padding: 0;
        flex-direction: column-reverse;
        align-items: start;
    }
`;
export const Content = styled.section`

    @media (max-width: 1300px){
        display: ${props => `${props.visible}`};
    }
    @media (max-width: 768px){
        padding: 0 1.6rem;

    }
    
`;
export const ContentRepetido = styled.section`
    display: none;
    background-color: ${corSecundaria};
    color: ${corPrimaria};

    width: 100%;
    p{
        max-width: 650px;
    }

    @media (max-width: 1300px){
        display: block;
    }
`;
export const Img = styled.img`
    width: 100%;
    max-width: 550px;
    margin-bottom: 2rem;
`;
export const Name = styled.h1`
    font-family: 'Teko', sans-serif;
    font-size: 5rem;
    text-align: ${props => `${props.align}`};
    text-transform: uppercase;

    @media (max-width: 768px){
       text-align: start;
       font-size: 4rem;
    }
`;
export const Titulo = styled.p`
    margin-bottom: ${props => `${props.marginBottom}`};
    text-align: ${props => `${props.align}`};
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
    
    @media (max-width: 768px){
       text-align: start;

    }
`;
export const Description = styled.p`
    text-align: justify;
    margin-bottom: 1.6rem;
    max-width: 400px;
`;
export const ContainerHabilidades = styled.section`
    width: 100%;
    padding: 1.6rem;
    background-color: ${corSecundaria};
    color: ${corPrimaria};
    
    display: flex;
    align-items: center;
`;
export const ContentHabilidades = styled.section`
    @media (min-width: 1300px){
        display: grid;
        gap: 1.6rem;
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Habilidade = styled.section`
    background: url(${props => `${props.background}`}) center center no-repeat;
    background-size: contain;
    max-width: 650px;
    p{
        max-width: 650px;
    }
`;