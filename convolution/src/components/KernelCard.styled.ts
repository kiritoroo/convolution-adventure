import styled from "styled-components";

export const NameWrapper = styled.div`
  border-left: solid 3px #9C70F9;
  padding-left: 10px;
  font-weight: 500;
  margin: 10px 0;
  user-select: none;
`

export const MatrixWrapper = styled.div`
  background: #F9F9F9;
  padding: 25px 50px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`

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

export const FlexItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #E8E8E8;
  color: #9C70F9;
  font-weight: 500;
  border-radius: 2px;
  user-select: none;
`

export const Container = styled.div`
  margin: 20px 20px;
  font-size: 12px;

  &:hover ${MatrixWrapper} {
    background: linear-gradient(to bottom, #FFFFFF 20%, #EDE6FD 100%);
  }
`