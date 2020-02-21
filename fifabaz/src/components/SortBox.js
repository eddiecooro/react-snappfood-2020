import React from 'react';
import SortType from '../data/SortType';

function SortBox({ sort, changeSort }) {
  const fields = ['age', 'short_name', 'value'];

  const changeSelectedSort = field => {
    changeSort(field);
  };

  const getClassName = (sort, field) => {
    // Default sorted => "btn-outline-primary" Non selected button (Third Click)
    // Descending sorted => "btn-success" First Click
    // Ascending sorted => "btn-info" Second Click
    if (sort.type !== field) return 'btn-outline-primary';
    if (sort.ord === SortType.DES) return 'btn-success';
    if (sort.ord === SortType.ASC) return 'btn-info';
  };

  return (
    <div id="sort-box-container" className="d-flex py-2">
      {fields.map(field => (
        <button
          key={field}
          id={`sort-btn-${field}`}
          type="button"
          onClick={() => changeSelectedSort(field)}
          className={`btn mx-2 sort-btn ${getClassName(sort, field)}`}>
          {field}
        </button>
      ))}
    </div>
  );
}

export default SortBox;
