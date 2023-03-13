import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px){
    width: 100%;

  }

`

const Container = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px){
    width: 100%;
    padding: 12px;
  }

`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

 

`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`


const Logo = styled.img`
  height: 70px;
  cursor: pointer;

`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px){
    display: none;
    
  }
`

const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

`

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ca7ae1;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  color: whitesmoke;

`


function Navbar() {
  return (
    <Section>
      <Container>

        <Links>
        <Logo src="./img/ng2.png" alt="logo" />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Studio</ListItem>
          <ListItem>Works</ListItem>
          <ListItem>Contact</ListItem>
        </List>
        </Links>
        
        <Icons>
          <Icon src="./img/search.png" alt="search" />
          <Button>Hire Now</Button>
        </Icons>

      </Container>
    </Section>
  )
}

export default Navbar