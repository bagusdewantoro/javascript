import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

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
  const cart = useSelector(state => state.cart);
  // console.log(cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = token => {
    setStripeToken(token);
  }
  // console.log(stripeToken);

  useEffect(() => {
    async function makeRequest () {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 500
        });
        navigate('/success', {data:res.data});
        console.log('success: ' + stripeToken);
        // navigate('/success');
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.ttl, navigate]);

  return (
    <Container>
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
            {cart.prdcts.map(product => (
              <Product key={product._id + product.color + product.model}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Name: </b>{product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>{product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductModel>
                      <b>Model: </b>{product.model}
                    </ProductModel>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>Rp {product.price * product.quantity / 1000}K</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>YOUR ORDER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rp {cart.ttl / 1000}K</SummaryItemPrice>
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
              <SummaryItemPrice>Rp {cart.ttl / 1000}K</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Bagus test"
              image="https://avatars.githubusercontent.com/u/69944435?v=4"
              billingAddress
              shippingAddress
              description={`Total is ${cart.ttl}`}
              amount={cart.ttl}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default Cart;
