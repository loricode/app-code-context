import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './MainRouter';

export const AppRouter = () => {

  return (
    <>
      <BrowserRouter basename='/fasi'>
          <MainRouter></MainRouter>
      </BrowserRouter>
    </>
  );
};