export interface IKernelsData {
  id: string
  label: string
  count: number
  icon: JSX.Element
  color: string
  kernel3x3List: IKernelData[] | null
  kernel5x5List: IKernelData[] | null
  kernel7x7List: IKernelData[] | null
}

export interface IKernelData {
  name: string
  size: number
  matrix: any
  coef: number
}