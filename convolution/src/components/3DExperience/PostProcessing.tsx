import { ToneMapping, 
  EffectComposer,
   DepthOfField, 
   Pixelation,
   ChromaticAberration,
   Noise
  } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useControls } from 'leva';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import * as THREE from 'three'


export const PostProcessing = () => {
  // const { ...configToneMapping }= useControls(() => ({
  //   blendFunction: { value: BlendFunction.NORMAL },
  //   adaptive: { value: true },
  //   resolution: { value: 256, min: 16, max: 1024, step: 16 },
  //   middleGrey: { value: 2, min: 0, max: 10 },
  //   maxLuminance: { value: 100, min: 0, max: 1000 },
  //   averageLuminance: { value: 1, min: 0, max: 10 },
  //   adaptationRate: { value: 1, min: 0, max: 10 },
  // }));
  
  // const { granularity } = useControls(() => ({
  //   granularity: { value: 2, min: -10, max: 30 },
  // }))

  const [granularityState, setGranularity] = useState(10)
  
  let granularity = {
    value: 10
  }

  useEffect(() => {
    gsap.to(granularity, {
      duration: 2,
      value: 0,
      onUpdate: () => setGranularity(granularity.value)
    });
  }, []);

  return (
    <EffectComposer>
      {/* <ToneMapping
        {...configToneMapping}
      /> */}
      
      {/* <ChromaticAberration
        blendFunction={BlendFunction.NORMAL} // blend mode
        offset={new THREE.Vector2(0.02, 0.002)} // color offset
      /> */}

      {/* <Noise opacity={2} /> */}

      {/* <DepthOfField
        focusDistance={100} // where to focus
        focalLength={10} // focal length
        bokehScale={0.5} // bokeh size
      /> */}

      <Pixelation
        key={granularityState}
        granularity={granularityState}
      />
    </EffectComposer>
  )
}