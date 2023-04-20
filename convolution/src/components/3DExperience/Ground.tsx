import { Reflector } from '@react-three/drei'

export const Ground = (props: any) => {
  return (
    <Reflector
      resolution={512} 
      args={[100, 100]} 
      mirror={0.8} 
      rotation={[-Math.PI / 2, 0, Math.PI / 2]} 
      position-y={-1.05}/>
  )
}