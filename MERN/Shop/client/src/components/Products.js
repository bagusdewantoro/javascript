import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { urlProduct } from '../api.js';
import { popularProducts } from '../data';
import Product from './Product';
import { mobile } from '../responsive';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  ${mobile({ padding: '5px' })}
`;

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${urlProduct}?category=${cat}`);
        console.log(res);
      } catch(err) {

      }
    };
    getProducts();
  }, [cat]);

  return (
    <Container>
      {popularProducts.map(item => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  )
};

export default Products;
