import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
`

export const SVG = styled.svg`
  outline: solid 2px gray;
`

export const Rect = styled.rect`
  stroke: none;
  stroke-width: 0;
  opacity: 0.2;

  &.bounding {
    transition: stroke-width 0.2s ease-in-out, opacity 0s ease-in-out;
    stroke: #A882FA;
    stroke-width: 2;
    opacity: 1;
  }
`