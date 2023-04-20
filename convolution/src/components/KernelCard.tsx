import { useContext } from 'react'
import { IKernelData } from 'src/types'
import * as S from './KernelCard.styled'
import { KernelContext } from 'src/App'
import * as THREE from 'three'

function getMax(matrix: number[][]): number {
  let max = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}

interface Props {
  kernelData: IKernelData
}

export const KernelCard = (props: Props) => {
  const kernelData = props.kernelData
  const kernelContext = useContext(KernelContext)
  
  return (
    <>
      <S.Container>
        <S.NameWrapper>
          {kernelData.name} ({kernelData.size}x{kernelData.size})
        </S.NameWrapper>
        <S.MatrixWrapper 
          isSelected={kernelContext?.kernelInfo?.id === kernelData.id ?? false}
          onClick={() => kernelContext?.setKernelInfo(kernelData)}>
          <S.FlexMatrixVez>
            {kernelData.matrix.map((row: number[], i: number) => (
              <S.FlexMatrixHoz key={i}>
                {row.map((value: number, j: number) => (
                  <S.FlexItem threeColor={new THREE.Color((getMax(kernelData.matrix)-value/1.9)/getMax(kernelData.matrix),(getMax(kernelData.matrix)-value)/getMax(kernelData.matrix),1)} key={`${i}-${j}`}>{value}</S.FlexItem>
                ))}
              </S.FlexMatrixHoz>
            ))}
          </S.FlexMatrixVez>
        </S.MatrixWrapper>
      </S.Container>
    </>
  )
}