import { Children } from 'react'
import { motion } from 'framer-motion'
import { useStore } from 'src/store'

const trans = { duration: 0.8, ease: [0.23, 1, 0.32, 1] }

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
  return (
    <>
      <div className="info">
        {/* <h1>36</h1> */}
        <List open={state.open}>
          <h3>Gaussian</h3>
          <h3>3x3</h3>
          <h3>
            <span className="accent">PEGASUS</span>
          </h3>
          <h4>Filtering Kernel</h4>
          {/* <p className="price">$98.97</p> */}
          <p>
          A Gaussian kernel is a type of kernel function that is commonly used in image processing and computer vision. It is a bell-shaped function that is used to blur or smooth an image, as well as to reduce noise. The kernel is typically centered at the origin and its shape is determined by a single parameter, the standard deviation. The larger the standard deviation, the more spread out the bell curve becomes, resulting in a greater amount of blur or smoothing.
          </p>
        </List>
      </div>
    </>
  )
}
