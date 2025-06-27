import { useState } from 'react';
import AdvancedSearchFilter from './AdvancedSearchFilter';
import PropTypes from 'prop-types';

const filterBoxStyle = {
  background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
  borderRadius: '22px',
  boxShadow: '0 8px 32px rgba(60, 72, 88, 0.16)',
  padding: '40px 32px',
  margin: '40px auto',
  maxWidth: '540px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1.5px solid #cbd5e1',
  transition: 'box-shadow 0.2s',
};

const titleStyle = {
  fontSize: '2.2rem',
  fontWeight: 800,
  color: '#1e293b',
  marginBottom: '14px',
  letterSpacing: '0.5px',
  textAlign: 'center',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const subtitleStyle = {
  fontSize: '1.05rem',
  color: '#64748b',
  marginBottom: '18px',
  textAlign: 'center',
  fontFamily: 'Inter, system-ui, sans-serif',
};

const dividerStyle = {
  width: '70px',
  height: '4px',
  background: 'linear-gradient(90deg, #6366f1 0%, #38bdf8 100%)',
  borderRadius: '2px',
  margin: '0 auto 24px auto',
  border: 'none',
};

const EventFilters = ({
  onSearch,
  onDateFilter,
  onTypeFilter,
  onYearFilter,
  types,
  years
}) => {
  // Add subtle hover effect for the filter box
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...filterBoxStyle,
        boxShadow: hovered
          ? '0 12px 40px rgba(60, 72, 88, 0.22)'
          : filterBoxStyle.boxShadow,
        borderColor: hovered ? '#6366f1' : filterBoxStyle.border,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={titleStyle}>Find Your Event</div>
      <div style={subtitleStyle}>
        Quickly search and filter events by type, year, or date.
      </div>
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
