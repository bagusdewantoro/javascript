import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
// import { popularProducts } from '../data';

import { publicRequest } from '../requestMethods';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  min-width: 300px;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '60vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 15px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 2px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const FilterModel = styled.select`
  margin-left: 5px;
  padding: 5px;
`;

const FilterModelOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }
`;


const Product = () => {
  const location = useLocation();
  // console.log(location);
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [model, setModel] = useState('');

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () => {
    // update CART

  }

  useEffect(() => {
    (async function getProduct() {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
        // console.log(res.data)
      } catch(err) {}
    })();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{`${product.price / 1000} K`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map(c => (
                <FilterColor
                  key={c}
                  color={c}
                  onClick={() => setColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Model</FilterTitle>

              <FilterModel
                onChange={e => setModel(e.target.value)}
              >
                {product.model?.map(m => (
                  <FilterModelOption
                    key={m}
                  >
                    {m}
                  </FilterModelOption>
                ))}
              </FilterModel>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
};

export default Product;
