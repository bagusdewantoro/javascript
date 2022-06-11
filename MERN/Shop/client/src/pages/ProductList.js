import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
  &::first-letter {
    text-transform: uppercase
  }
  ${mobile({ margin: '0px 20px' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: '0px 20px',
    display:'flex',
    flexDirection: 'column'
  })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option`

`;

const ProductList = () => {
  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilters = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }
  // console.log(filters);
  const handleSort = e => {
    setSort(e.target.value);
  }
  // console.log(sort)

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue='model' name='model' onChange={handleFilters}>
            <Option disabled value='model'>Model</Option>
            <Option value='lp'>Les Paul</Option>
            <Option value='hollow'>Hollow Body</Option>
            <Option value='strat'>Stratocaster</Option>
            <Option value='tele'>Telecaster</Option>
            <Option value='folk'>Folk</Option>
            <Option value='classic'>Classic</Option>
            <Option value='gypsy'>Gypsy</Option>
            <Option value='flamenco'>Flamenco</Option>
          </Select>
          <Select defaultValue='color' name='color' onChange={handleFilters}>
            <Option disabled value='color'>Color</Option>
            <Option value='black'>Black</Option>
            <Option value='brown'>Brown</Option>
            <Option value='white'>White</Option>
            <Option value='red'>Red</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value='newest' defaultValue>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        cat={cat}
        filters={filters}
        sort={sort}
      />
    </Container>
  )
};

export default ProductList;
