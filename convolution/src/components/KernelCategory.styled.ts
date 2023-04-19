import styled from "styled-components";
import { darken } from 'polished';

export const Flex1 = styled.div<{ isShow: boolean, color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  border-radius: 10px;
  padding: 5px 15px;
  background: ${(props) => {
    return props.isShow
      ? `linear-gradient(to right, ${props.color} 50%, ${darken(0.1, props.color)} 120%);`
      : `linear-gradient(to right, ${props.color} 10%, #FFFFFF 100%);`
  }};
  background-size: 200% 100%;
  background-position: 100% 50%;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`

export const Flex2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
`

export const IconWrapper = styled.div`
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`

export const LabelWrapper = styled.div`
  margin-right: 50px;
`

export const CountWrapper = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #EDEFF1;
  color: #B6BABE;
  font-size: 10px;
  font-weight: 500;
`

export const Container = styled.div`
  margin: 15px 10px;
  font-size: 12px;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
  &:hover ${Flex1} {
    background-position: 0 50%;
    transform: scale(1.05);
  }
  &:hover ${IconWrapper} {
    transform: scale(1.5);
    margin-right: 20px;
  }

  &:active ${Flex1} {
    transform: scale(0.95);
  }
`