import React from 'react';
import PropTypes from 'prop-types';

const FacultyTabs = ({ tabItems, activeTab, onTabChange }) => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap">
            {tabItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-4 text-xs font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? 'border-white border-[1px] border-solid bg-blue-800'
                    : 'border-transparent hover:bg-blue-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FacultyTabs.propTypes = {
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default FacultyTabs;
