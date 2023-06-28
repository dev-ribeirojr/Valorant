import styled from "styled-components";

export const Container = styled.section`

    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    margin: 0 auto;
    padding: 0 1.6rem;

    @media screen and (min-width: 767px){
        max-width: 1300px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Card = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(${props => `${props.background}`}) center center no-repeat;
    background-size: cover;
    border: 2px solid #FFF;

    position: relative;

    img{
        width: 100%;
        padding-bottom: 1.6rem;
        transform: scale(0.9);
        transition: transform 300ms ease-in;
    }   

    :hover{
        border-color: ${props => `#${props.corUm}`};

        h1{
            display: flex;
            background-color: ${props => `#${props.corUm}`};
            color: ${props => `#${props.corQuatro}`};

        }
        img{
            transition: ease-in;
            transform: scale(1);
            transition: transform 300ms ease-in;
        }
    }
`;

export const Fundo = styled.section`
    background: linear-gradient(to top, 
        ${props => `#${props.corUm}`}, 
        ${props => `#${props.corDois}`}, 
        ${props => `#${props.corTres}`}, 
        ${props => `#${props.corQuatro}`}
    );
`;

export const Name = styled.h1`

    display: none;
    align-items: center;
    justify-content: center;

    font-size: 2rem;
    width: 100%;
    height: 3rem;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    
`;

