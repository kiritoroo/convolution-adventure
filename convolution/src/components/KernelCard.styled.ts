import styled from "styled-components";

export const NameWrapper = styled.div`
  border-left: solid 3px #9C70F9;
  padding-left: 10px;
  font-weight: 500;
  margin: 10px 0;
`

export const MatrixWrapper = styled.div`
  background: #F9F9F9;
  padding: 25px 25px;
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
  background: #D9D9D9;
  color: #9C70F9;
  font-weight: 500;
  border-radius: 2px;
`

export const Container = styled.div`
  margin: 20px 20px;
  font-size: 12px;
`