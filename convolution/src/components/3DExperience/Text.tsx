import { MeshTransmissionMaterial, Center, Text3D } from "@react-three/drei"
import { useControls, button } from 'leva'
import { useSpring, animated } from "@react-spring/three"
import * as THREE from 'three'
import { useEffect } from "react"

export const Text = ({ children, font = '/Inter_Medium_Regular.json', ...props }) => {

  // const { autoRotate, text, shadow, ...config } = useControls({
  //   text: 'Inter',
  //   backside: false,
  //   samples: { value: 16, min: 1, max: 32, step: 1 },
  //   resolution: { value: 512, min: 64, max: 2048, step: 64 },
  //   transmission: { value: 0.6, min: 0, max: 1 },
  //   clearcoat: { value: 0, min: 0.1, max: 1 },
  //   clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
  //   thickness: { value: 0.55, min: 0, max: 5 },
  //   chromaticAberration: { value: 5, min: 0, max: 5 },
  //   anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
  //   roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 1, min: 0, max: 4, step: 0.01 },
  //   distortionScale: { value: 1, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0.4, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 0.83, min: 0, max: 2, step: 0.01 },
  //   color: '#bfb8f7',
  //   gColor: '#D6D2F3',
  //   shadow: '#D6D2F3',
  //   autoRotate: false,
  //   screenshot: button(() => {
  //     // Save the canvas as a *.png
  //     const link = document.createElement('a')
  //     link.setAttribute('download', 'canvas.png')
  //     link.setAttribute('href', document.querySelector('canvas')!.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
  //     link.click()
  //   })
  // })

  //  const [textSpring, textApi] = useSpring(
  //   () => ({ "position": new THREE.Vector3(-8, -2, 5), config: { mass: 2, friction: 10 } }),
  //   []
  // )

  // useEffect(() => {
  //   textApi.start({ 'position': new THREE.Vector3(-8, 2, 5)})
  // }, [])

  return (
    <>
      <animated.group castShadow {...props}>
        <Center scale={[0.8, 1, 1]} front top>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={2}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            {/* <MeshTransmissionMaterial reflectivity={0.5} {...config}/> */}
            <meshStandardMaterial/>
          </Text3D>
        </Center>
      </animated.group>
    </>
  )
}