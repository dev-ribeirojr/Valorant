import styled from 'styled-components';
const corPrimaria = '#0F1823';
const corSecundaria = '#ECE8E1';

export const Container = styled.section`
    padding-top: 2rem;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .link{
        color: ${corSecundaria};
        margin-top: 1.6rem;
        border: 1px solid ${corSecundaria};
        padding: 8px 0;
        border-radius: 8px;
        width: 200px;
        text-align: center;
        z-index: 1;
        :hover{
            background-color: ${corSecundaria};
            color: ${corPrimaria};
        }
    }
    p{
        font-size: 1.2rem;
    }
    @media (max-width: 768px){
        img{
            max-width: 400px;
        }
        h1{
            font-size: 8rem;
            position: absolute;
        }
    }
    @media (min-width: 768px){
        img{
            max-width: 600px;
            position: absolute;
            top: 20%;
            left: 45%;
        }
        h1{
            font-size: 15rem;
            position: static;
        }
    }
    @media (min-width: 1024px){
        img{
            max-width: 700px;
            position: absolute;
        }
        h1{
            font-size: 20rem;
            position: static;
        }
    }
`;

export const Img = styled.img`
    max-width: 600px;
`;
export const ContainerImg = styled.section`
`;
export const Titulo = styled.h1`
    font-size: 20rem;
`;