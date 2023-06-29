import styled from "styled-components";

export const Sobre = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    padding: 1.5rem;

    p{
        font-size: 1.2rem;
        max-width: 750px;
        color: #adadad;
        margin: 1rem 0;
    }
`;
export const Titulo = styled.h1`
    margin: 3rem 0 2rem 0;
    font-size: 3rem;
    @media (min-width: 767px){
        font-size: 4rem;
    }
    @media (min-width: 1024px){
        font-size: 4.5rem;
    }
`;