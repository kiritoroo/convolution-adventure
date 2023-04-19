import { LayerMaterial, Depth } from 'lamina'
import { 
  RoundedBox
} from '@react-three/drei'

export const BoxDepth = () => {
  return (
    <RoundedBox 
      args={[1,1,0.5]}
      radius={0.1}
      castShadow 
      position={[0,0,0]}>
      <meshStandardMaterial
        metalness={1} 
        roughness={1}/>
      <LayerMaterial lighting="standard" color="white" toneMapped={true}>
        <Depth colorA="#B3CCF3" colorB="#FFF" alpha={1} mode="multiply" near={0.0} far={0.6} origin={[0, 0, 0]} />
        <Depth colorA="#B3CCF3" colorB="#FFF" alpha={1.0} mode="multiply" near={0.0} far={0.6} origin={[0, -0.25, -0.1]} />
      </LayerMaterial>
    </RoundedBox>
  )
}