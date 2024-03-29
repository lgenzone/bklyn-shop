import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Store } from './Store';
import { useContext } from 'react';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import CleansersScreen from './screens/CleansersScreen';
import PeptidesScreen from './screens/PeptidesScreen';
import TonersScreen from './screens/TonersScreen';
import SerumsScreen from './screens/SerumsScreen';
import MasksScreen from './screens/MasksScreen';
import AntiAgingScreen from './screens/AntiAgingScreen';
import AcneControlScreen from './screens/AcneControlScreen';
import EyeTreatmentsScreen from './screens/EyeTreatmentsScreen';
import OtherScreen from './screens/OtherScreen';
import Logo from './images/logo.png';
import Button from 'react-bootstrap/Button';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="navbar" expand="lg">
            <Container>
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand className="brand">
                  <img src={Logo} alt="BKLYN" className="logo" />
                </Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Link to="/cart" className="nav-link cart-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                  <NavDropdown title="Shop" id="shop-nav-dropdown">
                    <LinkContainer to="/antiaging">
                      <NavDropdown.Item>Anti-Aging</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/acnecontrol">
                      <NavDropdown.Item>Acne Control</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/eyetreatments">
                      <NavDropdown.Item>Eye Treatments</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/cleansers">
                      <NavDropdown.Item>Cleansers & Scrubs</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/peptides">
                      <NavDropdown.Item>Peptides</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/toners">
                      <NavDropdown.Item>Toners</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/serums">
                      <NavDropdown.Item>Serums</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/masks">
                      <NavDropdown.Item>Masks</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/other">
                      <NavDropdown.Item>Other</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        
        <main>
          <Container className="mt-2">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/orderhistory" element={<OrderHistoryScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/antiaging" element={<AntiAgingScreen />} />
              <Route path="/acnecontrol" element={<AcneControlScreen />} />
              <Route path="/eyetreatments" element={<EyeTreatmentsScreen />} />
              <Route path="/cleansers" element={<CleansersScreen />} />
              <Route path="/peptides" element={<PeptidesScreen />} />
              <Route path="/toners" element={<TonersScreen />} />
              <Route path="/serums" element={<SerumsScreen />} />
              <Route path="/masks" element={<MasksScreen />} />
              <Route path="/other" element={<OtherScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
