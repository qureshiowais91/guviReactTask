import Sidebar from '../sideBar';
import { Outlet } from 'react-router-dom';
import Navbar from "../navbar/navbar";
function RootLayout() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
