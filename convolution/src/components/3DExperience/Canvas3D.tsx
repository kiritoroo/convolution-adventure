import { Canvas, useFrame, extend } from '@react-three/fiber'
import { 
  OrbitControls
} from '@react-three/drei'
import { Grid } from './Grid'
import { Env } from './Env'
import { Shadows } from './Shadowns'
import * as THREE from 'three'
import * as S from './Canvas3D.styled'
import { BoxAnim } from '../Example/BoxAnim'
import { Box } from '../Example/Box'
import { Kernels, ChildRef } from './Kernels'
import { createRef, useEffect, useRef, useState } from 'react'
import { Bg } from './Bg'
import { Rig } from './Rig'
import { Ground } from './Ground'
import { Selector } from './Selector'
import { Text } from './Text'
import gsap from 'gsap';
import { PostProcessing } from './PostProcessing'
import GradientShaderMaterial from './GradientShader'


export const Canvas3D = () => {
  const btnRef = useRef()
  const containerRef = useRef()

  // const kernelRef = useRef<ChildRef>(null)
  const [kernelRef, setRef] = useState<ChildRef>()

  // useEffect(() => {
  //   if (kernelRef) {
  //     // kernelRef.setPos(new THREE.Vector3(0,-2,0))
  //   }
  // }, [kernelRef])

  const handleGray = () => {
    if (containerRef.current) {
      if ((containerRef.current as HTMLElement).classList.contains('gray')) {
        (containerRef.current as HTMLElement).classList.remove('gray')
      } else {
        (containerRef.current as HTMLElement).classList.add('gray')
      }
    }
  }

  return (
    <>
      <S.Button onClick={handleGray} ref={btnRef}>Toggle grayscale</S.Button>
      <S.Container ref={containerRef} id='canvas3d-container'>
        <Canvas shadows camera={{ position: [10, 5, 10], zoom: 5 }}>
          <Bg />
          <Rig />
          <ambientLight />
          <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

          <group>
            <Selector>
              <Kernels  myRef={setRef}/>
            </Selector>
            <Ground/>
            <Grid/>

            {/* <mesh position={[0,0,2]}>
            <planeBufferGeometry args={[10, 10]}/>
            <gradientShaderMaterial />
            </mesh> */}
          </group>
        
                
          <Env/>
          <Shadows/>
          <OrbitControls enableDamping={true}/>

          <PostProcessing/>
        </Canvas>
      </S.Container>
    </>
  )
}