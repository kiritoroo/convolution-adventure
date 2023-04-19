import { useState } from 'react'
import { BiFilterAlt, BiSun, BiCustomize, BiTrendingUp } from 'react-icons/bi'
import { TbLine, TbPuzzle } from 'react-icons/tb'
import { IoDiamondOutline } from 'react-icons/io5'
import { KernelCategory } from '@comp/KernelCategory'
import { IKernelsData } from '../types'
import * as S from './KernelMenu.styled'
import { Spin as Hamburger } from 'hamburger-react'
import { KernelList } from './KernelList'

export const KernelMenu = () => {
  const [minimum, setMinimum] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<IKernelsData | null>(null)

  const kernelsData: IKernelsData[] = [
    {
      id: 'filtering',
      label: 'Filtering Kernels',
      count: 5,
      color: '#EDE6FD',
      icon: <BiFilterAlt size={25} color='#A882FA'/>,
      kernel3x3List: [
        {
          name: 'Gaussian',
          size: 3,
          matrix: [
            [1,2,1],
            [2,4,2],
            [1,2,1]],
          coef: 1/16
        },
        {
          name: 'Gaussian',
          size: 3,
          matrix: [
            [1,2,1],
            [2,4,2],
            [1,2,1]],
          coef: 1/16
        }
      ],
      kernel5x5List: [
        {
          name: 'Gaussian',
          size: 5,
          matrix: [
            [1,4,7,4,1],
            [4,16,26,16,4],
            [7,26,41,26,7],
            [4,16,26,16,4],
            [1,4,7,4,1]
          ],
          coef: 1/273
        }
      ],
      kernel7x7List: [
        {
          name: 'Gaussian',
          size: 7,
          matrix: [
            [0,0,1,2,1,0,0],
            [0,3,13,22,13,3,0],
            [1,13,59,97,59,13,1],
            [2,22,97,159,97,22,2],
            [1,13,59,97,59,13,1],
            [0,3,13,22,13,3,0],
            [0,0,1,2,1,0,0]
          ],
          coef: 1/1003
        },
        {
          name: 'Gaussian',
          size: 7,
          matrix: [
            [0,0,1,2,1,0,0],
            [0,3,13,22,13,3,0],
            [1,13,59,97,59,13,1],
            [2,22,97,159,97,22,2],
            [1,13,59,97,59,13,1],
            [0,3,13,22,13,3,0],
            [0,0,1,2,1,0,0]
          ],
          coef: 1/1003
        },
        {
          name: 'Gaussian',
          size: 7,
          matrix: [
            [0,0,1,2,1,0,0],
            [0,3,13,22,13,3,0],
            [1,13,59,97,59,13,1],
            [2,22,97,159,97,22,2],
            [1,13,59,97,59,13,1],
            [0,3,13,22,13,3,0],
            [0,0,1,2,1,0,0]
          ],
          coef: 1/1003
        }
      ]
    },
    {
      id: 'intensity',
      label: 'Intensity Kernels',
      count: 5,
      color: '#EDE6FD',
      icon: <BiSun size={25} color='#A882FA'/>,
      kernel3x3List: [
        {
          name: 'Sobel Horizontal',
          size: 3,
          matrix: [
            [1,2,1],
            [2,4,2],
            [1,2,1]],
          coef: 1/16
        }
      ],
      kernel5x5List: null,
      kernel7x7List: null
    },
    {
      id: 'edge',
      label: 'Edge Kernels',
      count: 10,
      color: '#EDE6FD',
      icon: <TbLine size={25} color='#A882FA'/>,
      kernel3x3List: null,
      kernel5x5List: null,
      kernel7x7List: null
    },
    {
      id: 'segmentation',
      label: 'Segmentation Kernels',
      count: 10,
      color: '#EDE6FD',
      icon: <TbPuzzle size={25} color='#A882FA'/>,
      kernel3x3List: null,
      kernel5x5List: null,
      kernel7x7List: null
    },
    {
      id: 'enhancement',
      label: 'Enhancement Kernels',
      count: 10,
      color: '#EDE6FD',
      icon: <BiTrendingUp size={25} color='#A882FA'/>,
      kernel3x3List: null,
      kernel5x5List: null,
      kernel7x7List: null
    },
    {
      id: 'special',
      label: 'Special Kernels',
      count: 10,
      color: '#E1EBFB',
      icon: <IoDiamondOutline size={25} color='#83B0F2'/>,
      kernel3x3List: null,
      kernel5x5List: null,
      kernel7x7List: null
    },
    {
      id: 'custom',
      label: 'Custom Kernels',
      count: 10,
      color: '#E1EBFB',
      icon: <BiCustomize size={25} color='#83B0F2'/>,
      kernel3x3List: null,
      kernel5x5List: null,
      kernel7x7List: null
    }
  ]

  const handleSetMinimum = () => {
    setMinimum(!minimum)
  }

  const handleSelectKernel = (category: IKernelsData) => {
    if (selectedCategory?.id == category.id) {
      setSelectedCategory(null)
      return
    }

    setSelectedCategory(category);
  };

  return (
    <>
      <S.Container>
        <Hamburger size={20} color={'#B6BABE'} onToggle={handleSetMinimum}/>
        { kernelsData.map((category) => (
          <KernelCategory
            key={category.id}
            categoryData={category}
            isMinimum={minimum}
            isShow={selectedCategory?.id === category.id ?? false}
            onClick={() => handleSelectKernel(category)}/>
        ))}
      </S.Container>
    </>
  )
}