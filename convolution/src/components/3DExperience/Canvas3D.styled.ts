import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 99;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  transition: filter 0.5s ease-out;

  &.gray {
    filter: grayscale(100%);
  }
`

// export const GrayWave = styled.div`
//     position: absolute;
//     top: 0%;
//     left: 0%;
//     width: 100vw;
//     height: 100vh;
//     z-index: 99;
//     pointer-events: none;
//     user-select: none;
//     filter: grayscale(100%);
//     /* mask-size: cover;
//     animation: wave 2s infinite; */
// /* 
//     @keyframes wave {
//     0% {
//       transform: translateX(0%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   } */
// `