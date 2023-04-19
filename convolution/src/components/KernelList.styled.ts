import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)<{ size: number }>`
  background: #00ff00;
  position: absolute;
  right: ${props => -props.size*60-180+(props.size*20)}px;
  top: 0;
  width: auto;
  height: auto;
  padding: 20px 15px 10px 15px;
  border-radius: 10px;
  background: #FFFFFF;

  display: flex;
  flex-direction: column;
`

export const TabListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  padding: 10px 25px;
`

export const TabItem = styled.div`
  background: #00ff00;
  padding: 5px 20px;
  border-radius: 10px;
  background: #EDE6FD;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`

export const ListWrapper = styled.div`
  width: auto;
  height: auto;
  max-height: 80vh;
  overflow: auto auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 15px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #E8DDFF;
    border-radius: 15px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #D5C2FE;
  }
`

export const GradientBottom = styled.div`
  width: 100%;
  background: #00ff00;

  &:after {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20%;
    border-radius: 10px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 90%);
    user-select: none;
    pointer-events: none;
  }
`
