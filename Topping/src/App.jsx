import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/css/index.css';
import NabBar from './components/NabBar';
import Home from './components/Home';
import Search from './components/Search';
import Contact from './components/Contact';
import CommunityPost from './components/CommunityPost';
import Cart from './products/Cart';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import CartIndex from './products/CartIndex';
import PaymentProcessing from './products/Payment';
import { UserProvider } from './components/UserContext';
function App() {
  return (
    <UserProvider> 
    <Router>
      <NabBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/CartIndex" element={<CartIndex />} />
        <Route path="/checkout" element={<PaymentProcessing />} />
        <Route path="/CommunityPost" element={<CommunityPost />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
  </UserProvider>

    
  );
}

export default App;
