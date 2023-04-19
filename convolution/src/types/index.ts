export interface IKernelsData {
  id: string
  label: string
  count: number
  icon: JSX.Element
  color: string
  kernelList: IKernelData[] | null
}

export interface IKernelData {
  name: string
  size: number
  matrix: any
  coef: number
}