import { Canvas } from '@react-three/fiber'
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

export const Canvas3D = () => {
  return (
    <>
      <S.Container id='canvas3d-container'>
        <Canvas shadows camera={{ position: [10, 10, 10], zoom: 5 }}>
          <Box/>
          <Grid/>
          <Shadows/>
          <Env/>

          <OrbitControls enableDamping={true}/>
        </Canvas>
      </S.Container>
    </>
  )
}