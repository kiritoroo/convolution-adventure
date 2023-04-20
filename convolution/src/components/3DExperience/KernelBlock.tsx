import { useSpring, animated } from "@react-spring/three"
import { useEffect } from "react"
import { Float, MeshTransmissionMaterial, Text } from '@react-three/drei'
import { useThree  } from '@react-three/fiber'
import * as THREE from 'three'
import { useControls } from 'leva'

interface Props {
  args: {
    position: any
    rotation: any
  },
  delay: number,
  value: number,
  valMax: number
}

const minMaxScale = (value: number, min: number, max: number, new_min: number, new_max: number): number => {
  return (value - min) / (max - min) * (new_max - new_min) + new_min
}

export const KernelBlock = (props: Props) => {
  const [boxSpring, boxApi] = useSpring(
    () => ({ "scale": 0.2, config: { mass: 2, friction: 10 } }),
    []
  )
  const { width } = useThree((state) => state.viewport)

  useEffect(() => {
    boxApi.start({ 'scale': 1, delay: props.delay*20 })
  }, [boxApi])

  useEffect(() => {
    return () => {
      boxApi.start({ 'scale': 0.2 })
    }
  }, []);

  return (
    <animated.group
      castShadow
      { ...props.args }
      { ...boxSpring }>
      <Text
        position={[0, 0.5, 0]}
        rotation={[-Math.PI/2, 0, Math.PI/2]}
        font="/Ki-Medium.ttf"
        fontSize={0.4}
        color={'#bfa7f7'}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle">
        {props.value}
      </Text>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        {/* <MeshTransmissionMaterial samples={16} resolution={512} anisotropy={1} thickness={0.1} roughness={0.4} toneMapped={true} /> */}
        <meshStandardMaterial transparent={true} opacity={1} color={new THREE.Color((props.valMax - props.value/1.1)/props.valMax, (props.valMax - props.value)/props.valMax, 1)}/>
      </mesh>
    </animated.group>
  )
}