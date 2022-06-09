import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
// import { popularProducts } from '../data';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
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
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src='https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        </ImgContainer>
        <InfoContainer>
          <Title>Les Paul</Title>
          <Desc>Les Paul™ Standard returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music.</Desc>
          <Price>Rp 25.000 K</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black' />
              <FilterColor color='brown' />
              <FilterColor color='lightgrey' />
            </Filter>
            <Filter>
              <FilterTitle>Model</FilterTitle>
              <FilterModel>
                <FilterModelOption>Les Paul</FilterModelOption>
                <FilterModelOption>Stratocaster</FilterModelOption>
                <FilterModelOption>Rock</FilterModelOption>
              </FilterModel>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
};

export default Product;
