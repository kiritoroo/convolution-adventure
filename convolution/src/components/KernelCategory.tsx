import { useState } from 'react'
import { IKernelsData } from '../types'
import * as S from './KernelCategory.styled'
import { KernelList } from './KernelList'

interface Props {
  categoryData: IKernelsData
  isMinimum: boolean
  isShow: boolean
  onClick: () => void
}

export const KernelCategory = (props: Props) => {

  return (
    <>
    <S.Container onClick={props.onClick}>
      <S.Flex1 color={props.categoryData.color} isShow={props.isShow} >
        <S.Flex2>
          <S.IconWrapper>
            {props.categoryData.icon}
          </S.IconWrapper>
          {!props.isMinimum 
            ? (<S.LabelWrapper>
                {props.categoryData.label}
              </S.LabelWrapper>
            ) : null}
        </S.Flex2>
        {!props.isMinimum 
          ? (<S.CountWrapper>
              {props.categoryData.count}
            </S.CountWrapper>
          ) : null}
      </S.Flex1>
    </S.Container>
    { props.isShow && <KernelList kernelList={props.categoryData.kernelList}/>}
    </>
  )
}