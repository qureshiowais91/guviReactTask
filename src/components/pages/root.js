import Sidebar from '../sideBar';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/navbar';
function RootLayout() {
  return (
    <div className='container-flauid'>
      <Navbar></Navbar>
      <div className='row'>
        <div className='col-1'>
          <Sidebar></Sidebar>
        </div>
        <div className='col-11'>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
