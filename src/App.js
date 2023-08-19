import React from 'react';
import './sb-admin-2.min.css';
import LoginComp from './components/pages/login/login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './components/pages/root';

const routeDefination = createRoutesFromElements(
  <Route>
    <Route path='/' element={<LoginComp />} />
    <Route path='/dashboard' element={<RootLayout />} />
  </Route>
);
const router = createBrowserRouter(routeDefination);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
