import { useState } from 'react';
import AdvancedSearchFilter from './AdvancedSearchFilter';
import PropTypes from 'prop-types';

const filterBoxStyle = {
  background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
  borderRadius: '18px',
  boxShadow: '0 4px 24px rgba(60, 72, 88, 0.12)',
  padding: '32px 28px',
  margin: '32px auto',
  maxWidth: '520px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1.5px solid #d1d5db',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#1e293b',
  marginBottom: '18px',
  letterSpacing: '0.5px',
  textAlign: 'center',
};

const dividerStyle = {
  width: '60px',
  height: '4px',
  background: 'linear-gradient(90deg, #6366f1 0%, #38bdf8 100%)',
  borderRadius: '2px',
  margin: '0 auto 24px auto',
};

const EventFilters = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types,
  years
}) => {
  return (
    <div style={filterBoxStyle}>
      <div style={titleStyle}>Find Your Event</div>
      <div style={dividerStyle}></div>
      <AdvancedSearchFilter
        onSearch={onSearch}
        onDateFilter={onDateFilter}
        onTypeFilter={onTypeFilter}
        onYearFilter={onYearFilter}
        types={types}
        years={years}
        placeholder="🔍 Search events, types, or years..."
      />
    </div>
  );
};

export default EventFilters;
EventFilters.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onDateFilter: PropTypes.func.isRequired,
  onTypeFilter: PropTypes.func.isRequired,
  onYearFilter: PropTypes.func.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
};
