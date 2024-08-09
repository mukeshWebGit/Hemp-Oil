import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css'; 
import { Header } from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { Home } from './screens/Home';
import { Footer } from './component/Footer';
import { ProductDetails } from './screens/product-details';
import { ProductList } from './screens/product-list';
import { CartScreen } from './screens/CartScreen';
import SigninScreen from './screens/SignInScreen';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>  
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/product/" element={<ProductList/>}> </Route>
        <Route path="/cart/" element={<CartScreen/>}> </Route>
        <Route path="/signin/" element={<SigninScreen/>}> </Route>
        <Route path="/product/:slug" element={<ProductDetails/>}></Route>
      </Routes> 
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
