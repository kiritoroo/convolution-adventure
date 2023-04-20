import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three'

export const Rig = ({ v = new THREE.Vector3() }) => {
  const { camera, mouse } = useThree()

  return useFrame((state) => {
    const newPos = new THREE.Vector3(
      state.camera.position.x+state.mouse.x / 2,
      state.camera.position.y+state.mouse.y / 2,
      state.camera.position.z
    )
    state.camera.position.lerp(v.set(
      newPos.x, newPos.y, newPos.z), 0.05)
  })
}