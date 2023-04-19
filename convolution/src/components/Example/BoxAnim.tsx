import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import * as THRE from 'three'

interface Props {
  position: any
}

export const BoxAnim = (props: Props) => {
  const [boxSpring, boxApi] = useSpring(
    () => ({ "scale": 0.5, config: { mass: 2, friction: 10 } }),
    []
  );
  
  const handleClick = () => {
    boxApi.start({'scale': 1})
  }

  return (
    <animated.mesh
      {...props}
      onClick={handleClick}
      {...boxSpring}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </animated.mesh>
  );
}
