import { Canvas, useFrame } from '@react-three/fiber'
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

export const Canvas3D = () => {
  // const kernelRef = useRef<ChildRef>(null)
  const [kernelRef, setRef] = useState<ChildRef>()

  useEffect(() => {
    if (kernelRef) {
      // kernelRef.setPos(new THREE.Vector3(0,-2,0))
    }
  }, [kernelRef])

  return (
    <>
      <S.Container id='canvas3d-container'>
        <Canvas shadows camera={{ position: [10, 5, 10], zoom: 5 }}>
          <Bg />
          <Rig />
          <ambientLight />
          <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

          <Selector>
            <Kernels  myRef={setRef}/>
          </Selector>
          
          <Ground/>
                
          <Grid/>
          <Env/>
          <Shadows/>
          <OrbitControls enableDamping={true}/>
        </Canvas>
      </S.Container>
    </>
  )
}