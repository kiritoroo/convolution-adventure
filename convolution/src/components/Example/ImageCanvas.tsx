import { useEffect } from "react";
import { arr2canvas, draw2canvas, getImageData, img2arr } from "src/addons/utils";
import * as THREE from 'three'
import { resources } from "src/App";

export const ImageCanvas = () => {

  const img = resources.items['sprite1'] as THREE.Texture;
  const imgData = getImageData(img.image)
  const imgArr = img2arr(img.image);

  return (
    <>
    
    </>
  )
}