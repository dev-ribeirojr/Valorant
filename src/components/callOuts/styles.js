import styled from "styled-components";
const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';
const corSecundariaSombra = '#ece8e171';

export const ContentCall = styled.section`
    max-width: 1300px;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(4, 1fr);
    padding: 1.6rem;

    @media (max-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px){
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const Call = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 1rem;
    background-color: ${corPrimaria};
    box-shadow: 0 0 10px ${corSecundariaSombra};
    border-radius: 8px;

    :hover{
        background-color: ${corSecundaria};
        color: ${corPrimaria};
    }
`;
export const Name = styled.h2`

`;
export const RegiaoName = styled.p`
    margin: 0.5rem 0;
`;
export const Local = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;