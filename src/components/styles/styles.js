import styled, { keyframes } from "styled-components";

const load = keyframes`
  to{
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    animation: ${load} 5s linear infinite;
  }

`;
