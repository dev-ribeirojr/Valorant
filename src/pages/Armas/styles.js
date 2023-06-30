import styled from 'styled-components';

const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';
const corSecundariaSombra = '#ece8e171';

export const Container = styled.section`
    padding-top: 8rem;
    padding-bottom: 1.6rem;
`;
export const ContainerImg = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 1px solid ${corSecundaria};
    max-width: 1300px;
    padding: 1.6rem;
    width: 100%;
    box-shadow: 0 0 10px ${corSecundariaSombra};
`;
export const ContentArma = styled.section`
    max-width: 1300px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    padding: 0 1.6rem;
`;
export const Name = styled.h1`
    font-size: 4rem;
    margin-bottom: 1.6rem;
`;
export const Img = styled.img`
    width: 100%;
    max-width: 600px;
`;
export const Skins = styled.section`
    max-width: 1300px;

    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 767px){
        max-width: 1300px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
`;
export const Titulo = styled.h1`
    margin-top: 4rem;
    font-size: 4rem;
    align-self: self-start;
    padding-left: 1.6rem;
`;
export const Card = styled.section`
    text-align: center;
    border: 1px solid ${corSecundaria};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.6rem;
    box-shadow: 0 0 10px ${corSecundariaSombra};

    img{
        transform: scale(0.8);
        transition: transform 300ms ease-in;
    }
    :hover{
        background-color: ${corSecundaria};
        color: ${corPrimaria};
        img{
            transform: scale(0.9);
            transition: transform 300ms ease-in;
        }
    }
    
`;
export const NameSkin = styled.h2`
margin-bottom: 1.6rem;
`;
