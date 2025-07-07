
import React from 'react';
import LoginForm from '../../components/Admission/LoginForm';

import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const AdminLogin = () => {
  return (
    <SearchableWrapper>
      <LoginForm type="admin" />
    </SearchableWrapper>
  );

};

export default AdminLogin;
