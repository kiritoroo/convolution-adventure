import { createContext, useEffect, useState } from "react";
import { Canvas3D } from "./components/3DExperience/Canvas3D";
import { KernelMenu } from "./components/KernelMenu";
import { IKernelData } from "./types";
import { Overlay } from "@comp/2DExperience/Overlay";
import Cursor from "./addons/Cursor";
import Resources from "./addons/Resources";
import { assets } from "./addons/assets";
import { useRes } from "./store";
import * as THREE from 'three'
import { ImageCanvas } from "@comp/Example/ImageCanvas";

interface IKernelContext {
  kernelInfo: IKernelData,
  setKernelInfo: React.Dispatch<React.SetStateAction<IKernelData>>;
}

export const KernelContext = createContext<IKernelContext | null>(null)
export const resources = new Resources(assets)

export default function App() {
  const [isResReady, setResReady] = useState<boolean>(false)
  // const res = useRes()

  useEffect(() => {
    new Cursor()
  }, [])

  useEffect(() => {
    document.addEventListener('eResourcesReady', () => handleReady());

    return () => {
      document.removeEventListener('eResourcesReady', handleReady);
    }
  }, [])

  const handleReady = () => {
    setResReady(true)
    // res.resources = _res
  }

  // useEffect(() => {
  //   console.log(res.resources?.items)
  // }, [res.resources])

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
        { isResReady && <ImageCanvas/> }
        <KernelMenu/>
        <Overlay/>
      </KernelContext.Provider>   
    </div>
  )
}