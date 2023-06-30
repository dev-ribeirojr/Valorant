import styled from 'styled-components';
const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';
const corSecundariaSombra = '#ece8e171';

export const Container = styled.section`
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1.6rem ;
    max-width: 1300px;
    margin: 0 auto;
    padding-bottom: 1.6rem;

    @media (min-width: 767px){
        max-width: 1300px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

`;
export const Card = styled.section`
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 10px ${corSecundariaSombra};
    border: 1px solid ${corSecundaria};
    position: relative;

    :hover{
        background-color: ${corSecundaria};
        border-color: ${corPrimaria};
        box-shadow: 0 0 10px ${corPrimaria};

        h2{
            color: ${corPrimaria};
        }
        img{
            transform: scale(0.9);
            transition: transform 300ms ease-in;
        }
    }

`;
export const Name = styled.h2`
    position: absolute;
    bottom: 0;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #FFF;
`;
export const Img = styled.img`
    max-width: 300px;
    width: 100%;
    transform: scale(0.8);
    transition: transform 300ms ease-in;
`;