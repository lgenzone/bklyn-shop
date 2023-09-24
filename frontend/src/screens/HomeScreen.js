import { useEffect, useReducer } from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Product from '../components/Product';

import Featured from '../components/Featured';

import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import heroImage from '../images/good-skin-club-unsplash.png';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      console.log('FETCH_REQUEST');
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      console.log('FETCH_SUCCESS');
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      console.log('FETCH_FAIL');
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        const featuredProducts = result.data.filter(
          (product) => product.isFeatured
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: featuredProducts });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>bklyn</title>
      </Helmet>
      <h2>...hey beautiful</h2>

      {/* Hero */}
      <div
        className="p-5 text-center bg-image rounded-3 hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          height: '400px',
          backgroundSize: '100% 100%',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Featured*/}
      <Container>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Featured />
        )}
      </Container>
    </div>
  );
}

export default HomeScreen;
