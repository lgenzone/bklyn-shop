import { useEffect, useReducer } from 'react';
//import { Link } from "react-router-dom";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
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
      {/* Hero */}
      <div
        className="p-5 text-center bg-image rounded-3"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          height: '400px',
          
        }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <Container className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Welcome to BKLYN</h1>
              <h4 className="mb-3">
                add something here that invites user to start shopping
                "discover latest products..."
              </h4>
              <Button variant="outline-light" size="lg" href="#!" role="button">
                Shop Now
              </Button>
            </div>
          </Container>
        </div>
      </div>

      {/* Featured Products */}
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
