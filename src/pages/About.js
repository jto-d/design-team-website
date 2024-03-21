import React from 'react';
import styled from 'styled-components';
import { Tag } from '../components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import christinaimage from '../assets/Christina Wu Headshot.png'; 
import keerenimage from '../assets/Keeren Setokusumo Headshot.jpeg'; 
import yukiimage from '../assets/Yuki Huang Headshot.jpeg';
import aliceimage from '../assets/Alice Chakrapeesirisuk Headshot.jpeg';
import capleimage from '../assets/Caple Spence Headshot.jpeg';
import emilyimage from '../assets/Emily Yang Headshot.png';
import ishaanimage from '../assets/Ishaan Bhagat Headshot.jpeg';
import jackimagee from '../assets/Jack ODonnell Headshot.png';
import julesimage from '../assets/Jules Mpano Headshot.jpeg';
import raymondimage from '../assets/Raymond Yang Headshot.jpeg';
import stephanieimage from '../assets/Stephanie Oh Headshot.jpeg';
import tinneyimage from '../assets/Tinney Mak Headshot.jpeg';
import abaniimage from '../assets/Abani Ahmed Headshot.jpeg';
import kristinimage from '../assets/Kristin Jung Headshots.jpeg';

const AboutSection = styled.div`
  padding: 40px;
  background-color: #000000;
  color: #ffffff;
`;

const Heading = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #FBF9FF;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #FBF9FF;
  }
`;

const Mission = styled.div`
width: auto;
height: auto;
left: auto;
top: auto;

font-family: 'Proxima Nova';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
color #FBF9FF;
`;

const MeetTeam = styled.div`
  margin-top: 75px; 
  margin-bottom: 75px;
`;
const DirectorGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Director = styled.div`
  text-align: center;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #FBF9FF;
    margin-top: 10px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: #C4C4C4;
  }
`;
const Tags = styled.div`
  width: auto;
  flex-shrink: 0;
  gap: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LinkedInTag = styled.a`
display: inline-flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
background: #FFFFFF;
color rgba(202, 30, 84, 0.75);
font-size: 12px;
text-decoration: none;
border-radius: 50%;
opacity: 0.75;
transition: opacity 0.3s;
font-weight: 1000;
font-size: 20px;

  &:hover {
    opacity: 1;
  }
`;

const Members = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;

const Member = styled.div`

text-align: center;

h3 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #FBF9FF;
  margin-top: 10px;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background: #C4C4C4;
}
`;

const TeamGallery = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;

  .slick-slide {
    padding: 0 10px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const About = () => {
  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <AboutSection>
      <Mission>
        <Heading>our mission</Heading>
        <p>
          We aim to create a welcoming and creative space on campus where students of all
          experiences interested in design can thrive. Whether you are a seasoned designer looking
          to build your portfolio or a beginner learning how to use the Adobe Creative Suite, our
          team provides a space to nurture your creativity and design skills while making a
          campus-wide impact.
        </p>
      </Mission>
      <MeetTeam>
        <Heading>meet our team</Heading>
      </MeetTeam>
      <DirectorGroup>
        <Director>
          <img src={christinaimage} alt="christina" />
          <h3>christina wu</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"co-dircetor"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"SOC '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/christina-shuhui-wu/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Director>
        <Director>
          <img src={keerenimage} alt="keeren" />
          <h3>keeren setokusumo</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"co-dircetor"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"SOC '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/keerenseto/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Director>
      </DirectorGroup>
      <Members>
        <Member>
          <img src={abaniimage} alt="abani" />
          <h3>abani ahmed</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"logistics team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '25"} />
            <LinkedInTag href="https://www.linkedin.com/in/abani-ahmed/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={aliceimage} alt="alice" />
          <h3>alice chakrapeesirisuk</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"ui/ux & logistic team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"ARC '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/narisa-chakrapeesirisuk-ba34901b3" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={capleimage} alt="caple" />
          <h3>caple spence</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"web dev team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/caple-spence-599339287/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
      </Members>
      <Members>
        <Member>
          <img src={emilyimage} alt="emily" />
          <h3>emily yang</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"logistics team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"ECE'26"} />
            <LinkedInTag href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={ishaanimage} alt="member" />
          <h3>ishaan bhagat</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"web dev team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/ishaanbhagat/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={jackimagee} alt="jack" />
          <h3>jack o'donnel</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"web dev team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/jacktodonnell/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
      </Members>
      <Members>
        <Member>
          <img src={julesimage} alt="jules" />
          <h3>jules mpano</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"web dev team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '26"} />
            <LinkedInTag href="https://www.linkedin.com/in/julesmpano/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={kristinimage} alt="kristin" />
          <h3>kristin jung</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"ui/ux & logistics team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"SOC'26"} />
            <LinkedInTag href="https://www.linkedin.com/in/christinawu" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={raymondimage} alt="raymond" />
          <h3>raymond yang</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"branding team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"ECO'27"} />
            <LinkedInTag href="https://www.linkedin.com/in/raymond-yang-4b44992a9/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
      </Members>
      <Members>
      <Member>
          <img src={yukiimage} alt="yuki" />
          <h3>yuki huang</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"branding team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"ECO'27"} />
            <LinkedInTag href="https://www.linkedin.com/in/yuki-huang-470826290/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={tinneyimage} alt="tinney" />
          <h3>tinney mak</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"logistics team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS '25"} />
            <LinkedInTag href="https://www.linkedin.com/in/tinney-mak/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>
        <Member>
          <img src={stephanieimage} alt="stephanie" />
          <h3>stephanie oh</h3>
          <Tags>
            <Tag color={"#F6AC5D"} opacity={0.75} text={"branding team"} />
            <Tag color={"#DB6575"} opacity={0.75} text={"COS'26"} />
            <LinkedInTag href="https://www.linkedin.com/in/stephanie-oh/" target="_blank" rel="noopener noreferrer">in</LinkedInTag>
          </Tags>
        </Member>


      </Members>
      <TeamGallery>
        <Heading>team gallery</Heading>
        <Slider {...gallerySettings}>
          <div>
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Team Gallery 1" />
          </div>
          <div>
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Team Gallery 2" />
          </div>
          <div>
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Team Gallery 3" />
          </div>
          <div>
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Team Gallery 4" />
          </div>
          <div>
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Team Gallery 5" />
          </div>
        </Slider>
      </TeamGallery>
    </AboutSection>
  );
};

export default About;