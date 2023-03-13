import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'


const Container = styled.div`
    width: 100vh;
    height: 100%;
    scroll-snap-align: center;

`



const Test = () => {

    
  return (
    <Container>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <pointLight position={[9, 4, 8]} />
            <Cube />
            
        </Canvas>
    </Container>
  )
}

export default Test