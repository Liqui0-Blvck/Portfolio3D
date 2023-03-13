import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, } from '@react-three/drei'

const Section = styled.section`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 768px){
        height: 200vh;
    }
    
`

const Container = styled.div`
    height: 100%;
    width: 1250px;
    scroll-snap-align: center;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px){
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
        flex: 1;
        align-items: center;
    }

`

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 768px){
        flex: 1;
        width: 100%;
        height: 150px;
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
        padding: 10px;
    }
`
const Button = styled.button`
    background-color: #e99aff;
    width: 100px;
    color: white;
    font-weight: 500;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
`

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    animation: animate 1.5s infinite ease alternate;

    @media only screen and (max-width: 768px){
        width: 380px;
        height: 600px;
    }

    @keyframes animate {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-50px);
        }
    }

`

function Hero() {
  return (
    <Section>
        <Navbar />
        
        <Container>
            <Left>
                <Title>Think. Make. Solve.</Title>
                <WhatWeDo>
                    <Line src="./img/line.png" alt="line"/>
                    <Subtitle>What We Do</Subtitle>
                </WhatWeDo>
                <Desc>We Enjoy creating delightful, human-centered digital experiences</Desc>
                <Button>Learn More</Button>
            </Left>

            <Right>
                
              <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1,100,200]} scale={2.5}>
                <MeshDistortMaterial 
                  color="#452385" 
                  attach="material"
                  distort={0.5}
                  speed={2}/>
            
              
              
              
              
                </Sphere>
              </Canvas>




                <Img src="./img/astronauta.png" alt="hero" />
            </Right>
        </Container>





    </Section>
  )
}

export default Hero