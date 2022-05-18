import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
// import { popularProducts } from '../data';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0 px;
`;

const Price = styled.span`
  font-weight: 100;
  
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://www.pngarts.com/files/3/Red-Electric-Guitar-Transparent-Background-PNG.png' />
        </ImgContainer>
        <InfoContainer>
          <Title>Les Paul</Title>
          <Desc>Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music.</Desc>
          <Price>Rp 25.000 K</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
};

export default Product;
