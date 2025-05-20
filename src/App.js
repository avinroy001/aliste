import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
   <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes> */}
      </Router>
  );
}

export default App;
