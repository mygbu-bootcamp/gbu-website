import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

import SearchableWrapper from '../Searchbar/SearchableWrapper';

const ICTLayout = () => (
  <SearchableWrapper>
  <div className="min-h-screen">
    <Navbar />
    <div>
      <Outlet />
    </div>
  </div>
  </SearchableWrapper>
);

export default ICTLayout;