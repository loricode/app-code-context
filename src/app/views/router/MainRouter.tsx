import { Redirect, Switch, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { ShopCartPage } from '../pages/shop/ShopCartPage';

//components
import { Navbar } from '../components/navbar/Navbar';

export const MainRouter = () => {

  return (
    <>
       <div>
        <Navbar/>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/shoppingcart' component={ShopCartPage} />
          <Redirect to='/home'/>
        </Switch>
      </div>
    </>
  );
};