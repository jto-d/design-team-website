import React from 'react'
import styled from 'styled-components'
import { Tag } from '../components'

const Container = styled.div`
  height: 100vh;
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

const Heading = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-size: 110px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  background: linear-gradient(92deg, #F6AC5D 19.68%, #DB6575 57.48%, #CA1E54 107.32%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subheading = styled.h2`
  color: #FBF9FF;
  text-align: center;
  font-family: "Proxima Nova";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Tags = styled.div`
  width: 70%;
  flex-shrink: 0;


  gap: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;

`

const Home = () => {
  return (
    <Container>
      <Heading>e-club design</Heading>
      <Subheading>student-run creative design hub @ princeton e-club</Subheading>
      <Tags>
        <Tag color={"#F6AC5D"} opacity={0.85} text={"graphic design"} />
        <Tag color={"#F6AC5D"} opacity={0.75} text={"ui/ux"} />
        <Tag color={"#DB6575"} opacity={0.85} text={"branding"} />
        <Tag color={"#CA1E54"} opacity={0.75} text={"marketing"} />
        <Tag color={"#CA1E54"} opacity={0.85} text={"+ more!"} />
      </Tags>
    </Container>
    
  )
}

export default Home