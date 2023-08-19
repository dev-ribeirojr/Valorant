import styled from "styled-components";

export const Container = styled.section`
    margin-top: 4rem;
    position: relative;
    
    width: 100%;
    overflow: hidden;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1024px){
        height: calc(100vh - 4rem);
    }
    
`;
export const Video = styled.video`
    position: absolute;
    left: 0;
    right: 0;

    object-fit: cover;
    width: 100%;
    height: 500px;
    @media screen and (min-width: 1024px){
        height: calc(100vh - 4rem);
    }
`;
export const Content = styled.section`
    z-index: 1;
    color: #FFF;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;

    p{
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
    }
    svg{
        width: 100%;
        max-width: 700px;   
        height: 120px;

        @media screen and (max-width: 767px){
            height: 80px;
        }
    }
`;
export const Button = styled.button`
    margin-top: 4rem;
    width: 15rem;
    height: 4rem;
    font-size: 1.5rem;
    box-shadow: 0 0 10px #121212;
    transition: all 0.3s;

    &:hover{
        background-color: #121212;
        color: #FFF;
    }
`;