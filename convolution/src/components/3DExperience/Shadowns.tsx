import { 
  AccumulativeShadows,
  RandomizedLight
} from '@react-three/drei'

export const Shadows = () => {
  return (
    <AccumulativeShadows
      temporal
      frames={100}
      color={'#d6aafc'}
      colorBlend={5}
      toneMapped={true}
      alphaTest={0.9}
      opacity={1}
      scale={30}
      position={[0, -1.01, 0]}>
      <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
    </AccumulativeShadows>
  )
}