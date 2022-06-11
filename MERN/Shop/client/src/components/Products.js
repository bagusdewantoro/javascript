import { useState, useEffect } from 'react';
import styled from 'styled-components';

// import { popularProducts } from '../data';
import { publicRequest } from '../requestMethods';
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
    (async function getProducts() {
      try {
        const res = await publicRequest.get(
          cat
            ? `products?category=${cat}`
            : `products`
        );
        // console.log(res);
        setProducts(res.data)
      } catch(err) {}
    })();
    // getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilterProducts(
      products.filter(item =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters]);
  // console.dir(products);

  return (
    <Container>
      {cat ? filteredProducts.map(item => (
        <Product key={item._id} item={item} />
      )) : products
        .slice(0,8) // to show only 8 items in Home Page
        .map(item => (
        <Product key={item._id} item={item} />
      ))}
    </Container>
  )
};

export default Products;
