import { useEffect, useRef, useState } from "react";
import { arr2canvas, draw2canvas, getImageData, img2arr } from "src/addons/utils";
import * as THREE from 'three'
import { resources } from "src/App";
import * as S from './ImageCanvas.styled'
import { KernelContext } from "src/App"
import { useContext } from "react";
import { KernelDetail } from "./KernelDetail";

export interface IWindowRectInfo {
  index: number
  color: {
    r: number
    g: number
    b: number
  }
}

function fillRectAtIndex(rect: SVGRectElement, color: string): void {
  rect.setAttribute('fill', color);
}

export const ImageCanvas = () => {
  const kernelContext = useContext(KernelContext)
  const kernelInfo = kernelContext?.kernelInfo

  const ref = useRef<SVGElement>()

  const img = resources.items['sprite1'] as THREE.Texture;
  const imgData = getImageData(img.image)
  const imgArr = img2arr(img.image);
  const kenelSize = kernelInfo!.size
  const animSpeed = 30
  const rects = [];
  const offset = 10

  const timeoutIds: any[] = []
  let windowRect: SVGRectElement[] = []
  const [windowRectInfo, setWindowRectInfo] = useState<IWindowRectInfo[]>([])

  const clearAnim = () => {
    timeoutIds.forEach((id) => clearTimeout(id))
  }

  const raycaster = () => {
    ref.current?.addEventListener('mousemove', (event) => {
      const rect = event.target as SVGRectElement

      let indexX = rect.x.baseVal.value/offset
      let indexY = rect.y.baseVal.value/offset

      if (indexX < imgData.width-kenelSize+1 && indexY < imgData.height-kenelSize+1) {
        indexX = rect.x.baseVal.value/offset
        indexY = rect.y.baseVal.value/offset
      } else {
        if (indexX >= imgData.width-kenelSize+1) {
          indexX = imgData.width-kenelSize
        }
        if (indexY >= imgData.height-kenelSize+1) {
          indexY = imgData.height-kenelSize
        }
      }

      windowRect.forEach((rect: SVGRectElement) => {
        rect.classList.remove('bounding')
      })

      windowRect = []
      const _windowRectInfo = []

      clearAnim()

      for (let ky=0; ky < kenelSize; ky++) {
        for (let kx=0; kx < kenelSize; kx++) {
          const index = ((indexY+ky) * imgData.width + (indexX+kx));
          windowRect.push(ref.current?.childNodes[index] as SVGRectElement);
          
          const r = imgData.data[index * 4]
          const g = imgData.data[index * 4 + 1]
          const b = imgData.data[index * 4 + 2]

          const rectInfo: IWindowRectInfo = {
            index: index,
            color: {
              r: r, g: g, b: b 
            }
          }
          _windowRectInfo.push(rectInfo);
          
          (ref.current?.childNodes[index] as SVGRectElement).classList.add('bounding');
        }
      }

      setWindowRectInfo(_windowRectInfo)
      
    })
  }

  const animate = () => {
    for (let y = 0; y < imgData.height-(kenelSize - 1); y++) {
      timeoutIds.push(setTimeout(() => {
        for (let x = 0; x < imgData.width-(kenelSize - 1); x++) {
          timeoutIds.push(setTimeout(() => {
            
            windowRect.forEach((rect: SVGRectElement) => {
              rect.classList.remove('bounding')
            })

            windowRect = []
            const _windowRectInfo = []

            for (let ky=0; ky < kenelSize; ky++) {
              for (let kx=0; kx < kenelSize; kx++) {
                const index = ((y+ky) * imgData.width + (x+kx));
                windowRect.push(ref.current?.childNodes[index] as SVGRectElement);

                const r = imgData.data[index * 4]
                const g = imgData.data[index * 4 + 1]
                const b = imgData.data[index * 4 + 2]
      
                const rectInfo: IWindowRectInfo = {
                  index: index,
                  color: {
                    r: r, g: g, b: b 
                  }
                }
                _windowRectInfo.push(rectInfo);

                (ref.current?.childNodes[index] as SVGRectElement).classList.add('bounding');
              }
            }

            setWindowRectInfo(_windowRectInfo)

          }, (x+kenelSize) * animSpeed))
        }
      }, (y+kenelSize) * (imgData.width * animSpeed)))
    }
  }

  useEffect(() => {
    setWindowRectInfo([])

    if (ref.current) {
      raycaster()
      animate()

      // fillRectAtIndex(ref.current.childNodes[10] as SVGRectElement, '#00FF00')
    }

    return (() => {
      if (ref.current) {
        clearAnim()
        windowRect = []
        setWindowRectInfo([])

        ref.current!.childNodes.forEach((rect: any) => {
          rect.classList.remove('bounding')
        })
      }
    })
  }, [ref.current, kernelInfo])


  for (let y = 0; y < imgData.height; y++) {
    for (let x = 0; x < imgData.width; x++) {
      const index = y * imgData.width + x
      const r = imgData.data[index * 4]
      const g = imgData.data[index * 4 + 1]
      const b = imgData.data[index * 4 + 2]

      rects.push(
        <S.Rect
          key={index}
          x={x*offset}
          y={y*offset}
          width={offset}
          height={offset}
          fill={`rgb(${r}, ${g}, ${b})`}
        />
      );
    }
  }

  return (
    <S.Container>
      <div>Input (16x16) </div>
      <S.SVG ref={ref} width={imgData.width*offset} height={imgData.height*offset}>
        {rects}
      </S.SVG>

      <KernelDetail windowRect={windowRectInfo}/>
    </S.Container>
  )
}