import styled from 'styled-components'
import  Hero  from './components/Hero'
import  Who  from './components/Who'
import  Works  from './components/Works'
import  Contact  from './components/Contact'
import Test  from './components/Test'

const Container = styled.div`

  height: 100vh;
  background: url("./img/back.jpeg");
  background-size: cover;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;

  @media only screen and (max-width: 768px){
    background:url("./img/back.jpeg");
    
  }

`






function App() {

  return (
    <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
        {/* <Test /> */}
    </Container>
  )
}

export default App
