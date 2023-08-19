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
import ButtonComp from "./components/pages/button/button";
import CardsComp from "./components/pages/cards/cards";
import ColorComp from "./components/pages/color/color";
import BorderComp from "./components/pages/borders/border";
import OtherComp from "./components/pages/other/other";
import Animation from "./components/pages/animation/animation";
import RegisterComponent from "./components/pages/register/register";
import ForgotPassword from "./components/pages/forgotPassoword/forgotpassword";
import NotFound from "./components/pages/404/notfount";
import BlankPage from "./components/pages/blankpage/blankpage";
import Dashboard from './components/pages/dashboard/dashboard';
const routeDefination = createRoutesFromElements(
  <Route>
    <Route path='/' element={<LoginComp />} />
    <Route path='/login' element={<LoginComp />} />
    <Route path='/register' element={<RegisterComponent/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>

    <Route path='/dashboard' element={<RootLayout />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/buttons' element={<ButtonComp />} />
      <Route path='/dashboard/cards' element={<CardsComp />} />
      <Route path='/dashboard/utilities-color' element={<ColorComp />} />
      <Route path='/dashboard/utilities-border' element={<BorderComp />} />
      <Route path='/dashboard/utilities-animation' element={<Animation />} />
      <Route path='/dashboard/utilities-other' element={<OtherComp />} />
      <Route path='/dashboard/404' element={<NotFound/>}/>
      <Route path='/dashboard/blank' element={<BlankPage/>}/>
    </Route>
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
