import { Instances, Instance } from '@react-three/drei'

export const Grid = () => {
  const lineWidth = 0.026
  const height = 0.5
  const number = 25
  
  return (
    <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#999" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper args={[200, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
  </Instances>
  )
}