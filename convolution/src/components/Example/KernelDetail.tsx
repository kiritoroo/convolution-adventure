import { IWindowRectInfo } from "./ImageCanvas"
import * as S from './KernelDetail.styled'
import { KernelContext } from "src/App"
import { useContext, useEffect } from "react";
import * as THREE from 'three'

interface Props {
  windowRect: IWindowRectInfo[]
}

function arrayToMatrix(array: IWindowRectInfo[], size: number): IWindowRectInfo[][] {
  const matrix = [];

  for (let i = 0; i < array.length; i += size) {
    matrix.push(array.slice(i, i + size));
  }

  return matrix;
}


export const KernelDetail = (props: Props) => {
  const kernelContext = useContext(KernelContext)
  const kernelInfo = kernelContext?.kernelInfo

  let matrix = arrayToMatrix(props.windowRect, kernelInfo!.size)

  // useEffect(() => {
  //   matrix = []
  // }, [kernelInfo])

  return (
    <>
      <S.FlexMatrixVez>
        {matrix.map((row: IWindowRectInfo[], i: number) => (
          <S.FlexMatrixHoz key={i}>
            {row.map((value: IWindowRectInfo, j: number) => (
              <S.FlexItem key={`${i}-${j}`} threeColor={new THREE.Color(value.color.r/255, value.color.g/255, value.color.b/255)}>
                {value.color.r}
              </S.FlexItem>
            ))}
          </S.FlexMatrixHoz>
        ))}
      </S.FlexMatrixVez>
    </>
  )
}