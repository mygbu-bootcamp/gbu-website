import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const ICTLayout = () => (
  <>
<Navbar/>
    <Outlet />
  </>
);

export default ICTLayout;