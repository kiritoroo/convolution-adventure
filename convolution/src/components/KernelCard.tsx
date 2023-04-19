import { IKernelData } from 'src/types'
import * as S from './KernelCard.styled'

interface Props {
  kernelData: IKernelData
}

export const KernelCard = (props: Props) => {
  const kernelData = props.kernelData

  return (
    <>
      <S.Container>
        <S.NameWrapper>
          {kernelData.name} ({kernelData.size}x{kernelData.size})
        </S.NameWrapper>
        <S.MatrixWrapper>
          <S.FlexMatrixVez>
            {kernelData.matrix.map((row: number[], i: number) => (
              <S.FlexMatrixHoz key={i}>
                {row.map((value: number, j: number) => (
                  <S.FlexItem key={`${i}-${j}`}>{value}</S.FlexItem>
                ))}
              </S.FlexMatrixHoz>
            ))}
          </S.FlexMatrixVez>
        </S.MatrixWrapper>
      </S.Container>
    </>
  )
}