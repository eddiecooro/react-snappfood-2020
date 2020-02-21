import React from 'react';
import Nationality from '../data/Nationality';
import Clubs from '../data/Clubs';
import TeamPositions from '../data/TeamPositions';
const filters = [
  { name: 'nationality', data: Nationality },
  { name: 'club', data: Clubs },
  { name: 'team_position', data: TeamPositions }
];

function FilterBox({ filters: enabledFilters, enableFilter, disableFilter }) {
  return (
    <div className="filter-box">
      <div>
        <h5 className="card-title">Filter Box</h5>
        <div className="accordion" id="accordionExample">
          {filters.map(filter => {
            return (
              <div key={filter.name} className="card">
                <div className="card-header" id={`heading-${filter.name}`}>
                  <h2 className="mb-0">
                    <button
                      id={`btn-${filter.name}-collapse`}
                      className="btn"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse-${filter.name}`}
                      aria-expanded={filter.name === filters[0].name}
                      aria-controls={`collapse-${filter.name}`}>
                      {filter.name}
                    </button>
                  </h2>
                </div>
                <div
                  id={`collapse-${filter.name}`}
                  className={`collapse ${
                    filter.name === filters[0].name ? 'show' : 'hide'
                  }`}
                  aria-labelledby={`heading-${filter.name}`}
                  data-parent="#accordionExample">
                  <div className="card-body">
                    {filter.data.map(data => {
                      const isEnabled = !!enabledFilters.find(
                        ef => ef.category === filter.name && ef.name === data
                      );
                      return (
                        <div
                          key={data}
                          className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={isEnabled}
                            onChange={() => {
                              const currentFilterItem = {
                                category: filter.name,
                                name: data
                              };
                              if (isEnabled) disableFilter(currentFilterItem);
                              else enableFilter(currentFilterItem);
                            }}
                            id={`${filter.name}-${data}`}
                            value={data}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${filter.name}-${data}`}>
                            {data}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
