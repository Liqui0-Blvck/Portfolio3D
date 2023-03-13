import React from 'react'
import Mac from './Mac'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

const WebDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Mac />
      </Stage>


      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default WebDesign