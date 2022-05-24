import styled from 'styled-components';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
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
        <Center><h1 className='logo'>dom&sko</h1></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary' overlap='rectangular'>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
