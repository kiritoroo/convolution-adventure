import * as S from './KernelList.styled'
import { IKernelData } from 'src/types'
import { Variants } from "framer-motion";
import { KernelCard } from './KernelCard';

interface Props {
  kernelList: IKernelData[] | null
}

export const KernelList = (props: Props) => {
  const trans = { duration: 0.8, ease: [0.23, 1, 0.32, 1] };
  const variants: Variants = {
    hidden: { opacity: 0, x: "-50%" },
    enter: { opacity: 1, x: "50%", transition: trans },
    exit: { opacity: 0, x: "-50%" },
  };

  return (
    <>
      <S.Container
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}>
        <S.ListWrapper>
          {props.kernelList?.map((kernelData, i) => (
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