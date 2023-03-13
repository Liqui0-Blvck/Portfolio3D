import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center; 

  @media only screen and (max-width: 768px){
    height: 200vh;
  }
`

const Container = styled.div`
  height: 100%;
  width: 1150px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
  }
`

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px){
    display: none;
  }
   

`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px){
    align-items: center;
  }




`

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px){
    text-align: center;
  }

`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`

const Line = styled.img`
  height: 5px;

`

const Subtitle = styled.h2`
  color: #ca7ae1;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px){
    text-align: center;
    
  }
`
const Button = styled.button`
  background-color: #e99aff;
  width: 120px;
  color: white;
  font-weight: 500;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`


function Who() {
  return (
    <Section>
      <Container>

        <Left>
            {/* 3D model */}
          <Canvas camera={{fov: 25, position:[4,4,4]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={0.5} />
            <pointLight position={[3, 4, 5]} />
            <Cube />
          
          </Canvas>
        </Left>

        <Right>
            <Title>Think outside the square space</Title>
            <WhatWeDo>
                <Line src="./img/line.png" alt="line"/>
                <Subtitle>Who we are</Subtitle>
            </WhatWeDo>
            <Desc>a creative group designers and developers with a passion for the arts</Desc>
            <Button>See our works</Button>
        </Right>

      </Container>
    </Section>
  )
}

export default Who