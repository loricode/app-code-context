import { useReducer } from 'react';

import { AppRouter } from './app/views/router/AppRouter';

import { productsReducer, initialProducts } from './app/views/reducers/productsReducer';
import { ProductsContext } from './app/views/contexts/ProductsContext';

function App() {

  const [stateProducts, dispatchProducts] = useReducer(productsReducer, initialProducts);

  return (
    <ProductsContext.Provider value={{ stateProducts, dispatchProducts }}>
      <AppRouter />
    </ProductsContext.Provider>
  );
}

export default App;
