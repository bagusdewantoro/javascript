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
  const [filteredProducts, setFilteredProducts] = useState([]);

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
    cat && setFilteredProducts(
      products.filter(item =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters]);
  // console.dir(products);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

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
