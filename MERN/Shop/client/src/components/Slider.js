import { useState } from 'react';
import styled from 'styled-components';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gainsboro;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px' };
  right: ${props => props.direction === 'right' && '10px' };
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${ props => props.slideIndex * -100 }vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg }
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
`;

const Desc = styled.p`
  color: white;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Button = styled.button`
  color: white;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border-color: white;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : (sliderItems.length - 1) )
    } else {
      setSlideIndex(slideIndex < (sliderItems.length - 1) ? slideIndex + 1 : 0)
    }
  };
  return (
    <Container>
      <Arrow
        direction='left'
        onClick={() => handleClick('left')}
      >
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction='right'
        onClick={() => handleClick('right')}
      >
        <ArrowForwardIos />
      </Arrow>
    </Container>
  )
}

export default Slider;
