import React from 'react'
import styled, { css } from 'styled-components'
import { Tag, Title } from '../components'

const Container = styled.div`
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;

`

// const Heading = styled.h1`
//   text-align: center;
//   font-family: Montserrat;
//   font-size: 110px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;

//   background: linear-gradient(92deg, #F6AC5D 19.68%, #DB6575 57.48%, #CA1E54 107.32%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `

const Subheading = styled.h2`
  color: #FBF9FF;
  text-align: center;
  font-family: "proxima-nova";
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

/* JUST REALIZED WE NoT DOING THIS LOLOL */

const Subtitle = styled.h1`
  font-weight: 600;
  font-family: var(--font-montserrat);
  font-size: 30px;
  text-decoration: underline;
  text-underline-offset: 10px;
  margin-top: 50px;
`

const WorkContainer = styled.div`
  background-color: var(--background-color);
  color: white;
  padding: 5% 100px;
  font-size: 30px;
  width: 100%;
  text-align: left;

  ${props => props.right && css`
    text-align: right;
  `}
`

const Text = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-family: var(--font-montserrat);
  
`

const FeaturedWork = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`

const WorkSlide = styled.div`
  width: 30%;
  background-color: white;
  height: auto;
`

const Banner = styled.div`
  display: flex;
  height: 30vh;
  background: linear-gradient(90deg, #F6AC5D -6.66%, #DB6575 51.75%, #CA1E54 99.84%);
`

const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  background-color: transparent;

  h1 {
    margin: 0 20px;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
  }

`
const VertLine = styled.div`
  width: 2px;
  background-color: white;
  margin: auto;
  height: 50%;
  
`

const Home = () => {
  return (
    <>
      <Container>
        <Title />
        <Subheading>student-run creative design hub @ princeton e-club</Subheading>
        <Tags>
          <Tag color={"#F6AC5D"} opacity={0.85} text={"graphic design"} />
          <Tag color={"#F6AC5D"} opacity={0.75} text={"ui/ux"} />
          <Tag color={"#DB6575"} opacity={0.85} text={"branding"} />
          <Tag color={"#CA1E54"} opacity={0.75} text={"marketing"} />
          <Tag color={"#CA1E54"} opacity={0.85} text={"+ more!"} />
        </Tags> 
      </Container>
      <WorkContainer>
        <Subtitle>featured work</Subtitle>
        <FeaturedWork>
          <WorkSlide />
          <WorkSlide />
          <WorkSlide />
        </FeaturedWork>
      </WorkContainer>
      <Banner>
        <BannerText>
          <h1>like our work and in need of designs?</h1>
          <Tag color={"#FBF9FF"} text={"request designs from us"} transparent/>

        </BannerText>
        <VertLine />
        <BannerText>
          <h1>interested in making an impact through designs?</h1>
          <Tag color={"#FBF9FF"} text={"compete at designximpact"} transparentRight/>
        </BannerText>
      </Banner>
      
      
        
    </>
  )
}

export default Home