
import React from 'react';

import SearchableWrapper from '../Searchbar/SearchableWrapper';

import PropTypes from 'prop-types';

const SimpleLayout = ({ children }) => {
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-white">
      <main className="flex-1">
        {children}
      </main>
    </div>
    </SearchableWrapper>
  );
};

SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SimpleLayout;
