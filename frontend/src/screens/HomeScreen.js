import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Featured from '../components/Featured';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Button from 'react-bootstrap/esm/Button';
import Hero from '../images/hero-img-placeholder.jpeg';

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

      {/* Hero */}
      <header>
        <div
          className="text-center bg-image rounded-2"
          style={{
            backgroundImage: `url(${Hero})`,
            height: '30rem',
            marginTop: '2rem',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* background overlay */}
          <div
            className="mask d-flex justify-content-center align-items-center rounded-2"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // opacity
              width: '100%', 
              height: '100%', 
            }}
          >
            <div className="text-white">
              <Link to="/eyetreatments">
                <Button variant="outline-light" size="lg">
                  Shop Eye Treatments
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}

      {/* Featured */}
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
