import { useState } from 'react';
import { IKernelData } from 'src/types'
import { Variants } from "framer-motion";
import { KernelCard } from './KernelCard';
import * as S from './KernelList.styled'

interface Props {
  kernel3x3List: IKernelData[] | null,
  kernel5x5List: IKernelData[] | null
  kernel7x7List: IKernelData[] | null
}

export const KernelList = (props: Props) => {
  const trans = { duration: 0.8, ease: [0.23, 1, 0.32, 1] };
  const variants: Variants = {
    hidden: { opacity: 0, x: "-50%" },
    enter: { opacity: 1, x: "50%", transition: trans },
    exit: { opacity: 0, x: "-50%" },
  };

  const listKernel = [props.kernel3x3List, props.kernel5x5List, props.kernel7x7List]
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      <S.Container size={selectedTab}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}>
          <S.TabListWrapper>
            <S.TabItem onClick={() => setSelectedTab(0)}>3x3</S.TabItem>
            <S.TabItem onClick={() => setSelectedTab(1)}>5x5</S.TabItem>
            <S.TabItem onClick={() => setSelectedTab(2)}>7x7</S.TabItem>
          </S.TabListWrapper>
          <S.ListWrapper>
            {listKernel[selectedTab]?.map((kernelData, i) => (
              <KernelCard
              key={i}
                kernelData={kernelData}/>
            ))}
          </S.ListWrapper>
        <S.GradientBottom/>
      </S.Container>
    </>
  )
}