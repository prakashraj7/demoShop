
import { Fragment } from 'react';
import './App.css';
import MainHeader from './Components/Heads/MainHeader';
import MainHomePage from './Components/HomePages/MainHomePage';
import LandPage from './Components/HomePages/LandPage';
import { Route, Router, Routes } from 'react-router-dom';
import SingleProductDet from './Components/HomePages/SingleProductDet';
import AddedCartPage from './Components/Carts/AddedCartPage';
import AboutPage from './Components/HomePages/AboutPage';
import SignUpMain from './Components/SignAuth/SignUpMain';
import LoginMain from './Components/SignAuth/LoginMain';
import history from './Components/history';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Routes history={history}>
        <Route path='/' element={<LandPage />} />
        <Route path='/mainhomepage' element={<MainHomePage />} />
        <Route path='/singleproduct/:id' element={<SingleProductDet />} />
        <Route path='/addedCartpage' element={<AddedCartPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/signup' element={<SignUpMain />} />
        <Route path='/login' element={<LoginMain />} />
      </Routes>
    </Fragment>

  );
}

export default App;
