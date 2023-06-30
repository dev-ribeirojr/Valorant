import styled from 'styled-components';
const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';

export const Container = styled.section`
    background: url(${props => `${props.background}`}) center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    .link{
        font-size: 2rem;
        color: ${corSecundaria};
        background-color: ${corPrimaria};
        padding: 8px 0;
        border-radius: 8px;
        width: 200px;
        text-align: center;
        margin-top: 1.6rem;
        box-shadow: 0 0 10px ${corSecundaria};

        &:hover{
            background-color: ${corSecundaria};
            color: ${corPrimaria};
            box-shadow: 0 0 10px ${corPrimaria};
        }
    }

`;
export const ContentMapa = styled.section`
    margin-top: 4rem;
    max-width: 800px;
    @media (max-width: 1024px) {
        margin-top: 7rem;
    }
`;
export const Mapa = styled.img`
    width: 100%;
`;
export const Titulo = styled.h1`
    font-size: 4rem;
    background-color: ${corPrimaria};
    max-width: 1000px;
    width: 100%;
    text-align: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
export const Cordenadas = styled.p`
    color: ${corPrimaria};
    text-align: center;
    padding-top: 1rem;
    text-transform: uppercase;
`;
export const Content = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Descricao = styled.p`
    max-width:1000px;
    margin: 0 auto;
    padding: 1rem;
    color: ${corPrimaria};
`;


export const Name = styled.h2`
`;


export const Texto = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    max-width: 1000px;
    width: 100%;
    background-color: ${corSecundaria};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;