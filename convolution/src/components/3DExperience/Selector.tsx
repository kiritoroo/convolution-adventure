import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useStore } from "src/store";
import { easing } from 'maath'
import { useControls, button } from 'leva'
import { useThree  } from '@react-three/fiber'
import gsap from 'gsap';
import { Suspense, useContext, useEffect, useRef } from "react"
import { KernelContext } from "src/App"
import * as THREE from 'three'

interface Props {
  children: React.ReactNode;
}

export const Selector = (props: Props) => {
  const ref = useRef<any>()
  const store = useStore()
  const kernelContext = useContext(KernelContext)
  const kernelInfo = kernelContext?.kernelInfo

  useFrame(({ viewport, camera, pointer }, delta) => {
    const direction = ref.current.position.clone().sub(camera.position).normalize();
    ref.current.lookAt(ref.current.position.clone().sub(direction));
    ref.current.position.set(2+kernelInfo!.size/2, 2+kernelInfo!.size/2, 2+kernelInfo!.size/2)

    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3])
    // easing.damp3(ref.current.position, [(pointer.x * width) / 2, (pointer.y * height) / 2, 1], store.open ? 0 : 0.1, delta)
    easing.damp3(ref.current.scale, store.open ? 4 : 0, store.open ? 0.5 : 0.2, 1/32)
    easing.dampC(ref.current.material.color, store.open ? '#fcf4ff' : '#ffffff', 0.1, 1/32)

  })

  // const { autoRotate, text, shadow, ...config } = useControls({
  //   text: 'Inter',
  //   backside: false,
  //   samples: { value: 16, min: 1, max: 32, step: 1 },
  //   resolution: { value: 512, min: 64, max: 2048, step: 64 },
  //   transmission: { value: 1, min: 0, max: 1 },
  //   clearcoat: { value: 0, min: 0.1, max: 1 },
  //   clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
  //   thickness: { value: 0.1, min: 0, max: 5 },
  //   chromaticAberration: { value: 5, min: 0, max: 5 },
  //   anisotropy: { value: 1, min: 0, max: 1, step: 0.01 },
  //   roughness: { value: 0.4, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 0.25, min: 0, max: 4, step: 0.01 },
  //   distortionScale: { value: 0.25, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0.4, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 0.83, min: 0, max: 2, step: 0.01 },
  //   color: '#ff9cf5',
  //   gColor: '#ff7eb3',
  //   shadow: '#750d57',
  //   autoRotate: false,
  //   screenshot: button(() => {
  //     // Save the canvas as a *.png
  //     const link = document.createElement('a')
  //     link.setAttribute('download', 'canvas.png')
  //     link.setAttribute('href', document.querySelector('canvas')!.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
  //     link.click()
  //   })
  // })

  const { camera, mouse } = useThree()
  const cameraDefaultPos = new THREE.Vector3(10, 5, 10)
  // const { posx, posy, posz } = useControls({
  //   posx: { value: 10, min: -100, max: 100 },
  //   posy: { value: 5, min: -100, max: 100 },
  //   posz: { value: 10, min: -100, max: 100 }
  // });

  // camera.position.set(posx, posy, posz)

  useEffect(() => {
    gsap.globalTimeline.clear()
    if (store.open) {
      gsap.to(camera.position, {
        duration: 0.5,
        x: cameraDefaultPos.x+-5+kernelInfo!.size*2,
        y: cameraDefaultPos.y+-2+kernelInfo!.size*2,
        z: cameraDefaultPos.z+-5+kernelInfo!.size*2,
        ease: 'circle'
      })
    } else {
      gsap.to(camera.position, {
        duration: 0.5,
        x: cameraDefaultPos.x+5+kernelInfo!.size*2,
        y: cameraDefaultPos.y+20+kernelInfo!.size*2,
        z: cameraDefaultPos.z+5+kernelInfo!.size*2,
        ease: 'circle',
        delay: 0.2
      })
    }
  }, [store.open])

  return (
    <>
      <mesh ref={ref}
        scale={0}
        onClick={() => (store.open = !store.open)}>
        <circleGeometry args={[5, 64, 64]} />
        <MeshTransmissionMaterial
          samples={16}
          resolution={512}
          transmission={1}
          thickness={0.1}
          chromaticAberration={5}
          anisotropy={1}
          roughness={0.4}
          distortion={0.25}
          distortionScale={0.25}
          temporalDistortion={0.4}
          ior={0.83}
          toneMapped={true} />
        {/* <MeshTransmissionMaterial {...config} toneMapped={true} /> */}
      </mesh>
      <group
        // onPointerOver={() => (store.open = true)}
        // onPointerOut={() => (store.open = false)}
        // onPointerDown={() => (store.open = true)}
        // onPointerUp={() => (store.open = false)}>
          onPointerMove={() => (store.open = true)}
          onPointerLeave={() => (store.open = false)}
          onClick={() => (store.open = !store.open)}>
        {props.children}
      </group>
    </>
  )
}