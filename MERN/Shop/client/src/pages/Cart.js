import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props => props.type === 'filled' ? 'black': 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 200px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductModel = styled.div``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-right: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  ${'' /* height: 50vh; */}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Cart (2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://cdn.mos.cms.futurecdn.net/2d2c23111fdc8f0a02337b71f48b4dad.jpg'/>
                <Details>
                  <ProductName>
                    <b>Name: </b>YAMAHA SILENT GUITAR
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>986154-6584
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductModel>
                    <b>Model: </b>Acoustic Electric
                  </ProductModel>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rp 7,590K</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://www.stars-music.com/medias/taylor/110e-walnut-2017-dreadnought-cw-epicea-noyer-es2-hd-8-52261.jpg'/>
                <Details>
                  <ProductName>
                    <b>Name: </b>Taylor 100e
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>354789-114
                  </ProductId>
                  <ProductColor color='#ECD9C9' />
                  <ProductModel>
                    <b>Model: </b>Acoustic Electric
                  </ProductModel>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Rp 14,350K</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>YOUR ORDER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rp 29,530K</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Est. Shipping</SummaryItemText>
              <SummaryItemPrice>Rp 550K</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rp -70K</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rp 30,010K</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart;
