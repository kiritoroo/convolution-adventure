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
import { Kernels } from './Kernels'
import { useEffect, useRef } from 'react'
import { Bg } from './Bg'
import { Rig } from './Rig'
import { Ground } from './Ground'
import { Selector } from './Selector'
import { Text } from './Text'

export const Canvas3D = () => {

  return (
    <>
      <S.Container id='canvas3d-container'>
        <Canvas shadows camera={{ position: [10, 5, 10], zoom: 5 }}>
          <Bg />
          <Rig />
          <ambientLight />
          <directionalLight castShadow intensity={0.6} position={[0, 0, 10]} />

          <Selector>
            <Kernels/>
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