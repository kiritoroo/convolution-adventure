import { createContext, useState } from "react";
import { Canvas3D } from "./components/3DExperience/Canvas3D";
import { KernelMenu } from "./components/KernelMenu";
import { IKernelData } from "./types";

interface IKernelContext {
  kernelInfo: IKernelData,
  setKernelInfo: React.Dispatch<React.SetStateAction<IKernelData>>;
}

export const KernelContext = createContext<IKernelContext | null>(null)

export default function App() {
  const [currKernelInfo, setCurrKernelInfo] = useState<IKernelData>({
    id: 'gaussian3x3',
    name: 'Gaussian',
    size: 3,
    matrix: [
      [1,2,1],
      [2,4,2],
      [1,2,1]],
    coef: 1/16
  })

  return (
    <div id="app">
      <KernelContext.Provider value={{ 
        kernelInfo: currKernelInfo,
        setKernelInfo: setCurrKernelInfo
      }}>
        <Canvas3D/>
        <KernelMenu/>
      </KernelContext.Provider>   
    </div>
  )
}