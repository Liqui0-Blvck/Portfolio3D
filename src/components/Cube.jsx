import React, { useRef } from 'react'
import {PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube = () => {
  const textRef = useRef()
  useFrame(state => {
    textRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 1.5

  })

  return (
    <mesh>
      <boxGeometry/>
      <meshStandardMaterial>
      <RenderTexture attach="map">
          <color attach="background" args={['pink']} />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Text ref={textRef} fontSize={0.8} color="#535151" position={[0, 0, 0]}>
              Liqui0 Black
          </Text>
      </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

export default Cube