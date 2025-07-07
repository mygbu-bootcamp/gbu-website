
import React from 'react';
import LoginForm from '../../components/Admission/LoginForm';

import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const StudentLogin = () => {
  return (
    <SearchableWrapper>
    <LoginForm type="student" />
    </SearchableWrapper>
  );
};

export default StudentLogin;
