import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Atom from './Atom'
import styled from 'styled-components'

const Desc = styled.div`
  height: 200px;
  width: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;
  color: black;
  
  @media only screen and (max-width: 768px){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`


const WebDevelopment = () => {
    return (
      <>
       
        <Canvas>
          <Stage environment="city" intensity={0.8}>
            <Atom />
          </Stage>
    
    
          <OrbitControls enableZoom={false}/>
        </Canvas>
       
      </>
      )
}

export default WebDevelopment