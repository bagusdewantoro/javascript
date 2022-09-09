import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navbar.css'
import { mobile } from '../responsive';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: '0px 5px' })}
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '30px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ fontSize: '12px', margin: 'auto 0px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '5px' })}
`

const Navbar = () => {
  // const cart = useSelector(state => state.cart);
  // console.log(cart);
  const quantity = useSelector(state => state.cart.qty);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ID</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{ color: 'grey', fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Center><h1 className='logo'>dom&sko</h1></Center>
        </Link>
        <Right>
          <Link
            to='/register'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to='/login'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary' overlap='rectangular'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
