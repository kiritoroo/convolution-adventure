import styled from "styled-components";
import * as THREE from 'three'

export const FlexMatrixHoz = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
`

export const FlexMatrixVez = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const FlexItem = styled.div<{ threeColor: THREE.Color}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  /* background: #E8E8E8; */
  background: ${({ threeColor }) => `rgb(${threeColor.r * 255}, ${threeColor.g * 255}, ${threeColor.b * 255})`};
  color: gray;
  font-weight: 500;
  font-size: 10px;
  border-radius: 2px;
  user-select: none;
`