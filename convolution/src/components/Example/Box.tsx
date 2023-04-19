export const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial metalness={1} roughness={1}/>
    </mesh>
  )
}