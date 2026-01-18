import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* Footer can go here */}
      <footer className="bg-amazon-light_blue text-white p-8 mt-auto text-center text-xs">
        <div className="mb-4">
          <a href="#" className="hover:underline mx-2">Conditions of Use</a>
          <a href="#" className="hover:underline mx-2">Privacy Notice</a>
          <a href="#" className="hover:underline mx-2">Help</a>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
