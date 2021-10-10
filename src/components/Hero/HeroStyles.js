import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const DownArrow = styled.img`
  height: 4.5rem;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;

  @keyframes animateDown {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
  
    40% {
      transform: translateY(0.5rem);
    }
  
    60% {
      transform: translateY(0.3rem);
    }
  }
`;