import React from 'react';
import Table from '../components/Table';
import FilterBox from '../components/FilterBox';
import SortBox from '../components/SortBox';
import Players from '../data/Players';
import SortType from '../data/SortType';

const initialSort = {
  type: null,
  ord: null
};

const groupBy = function(arr, criteria) {
  return arr.reduce(function(obj, item) {
    var key = item[criteria];
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
};

const sortReducer = (currentSort, selectedSort) => {
  if (currentSort.type === selectedSort) {
    if (currentSort.ord === SortType.DES) {
      return { ...currentSort, ord: SortType.ASC };
    } else {
      return initialSort;
    }
  } else {
    return {
      type: selectedSort,
      ord: SortType.DES
    };
  }
};

function App() {
  const [sort, dispatchSort] = React.useReducer(sortReducer, initialSort);
  const [filters, setFilters] = React.useState([]);

  const filteredPlayers = React.useMemo(() => {
    if (filters.length === 0) return Players;
    return Players.filter(player => {
      const groupedFilters = groupBy(filters, 'category');
      return Object.values(groupedFilters).every(sameFilters =>
        sameFilters.some(filter => player[filter.category] === filter.name)
      );
    });
  }, [Players, filters]);

  const sortedPlayers = React.useMemo(() => {
    if (!sort.type) return filteredPlayers;

    const sorted = filteredPlayers.slice().sort((a, b) => {
      if (a[sort.type] === b[sort.type]) return 0;
      else return a[sort.type] > b[sort.type] ? 1 : -1;
    });
    return sort.ord === SortType.ASC ? sorted : sorted.reverse();
  }, [filteredPlayers, sort]);

  const changeSort = _selectedSort => {
    dispatchSort(_selectedSort);
  };

  const enableFilter = filter => {
    setFilters(f => [...f, filter]);
  };
  const disableFilter = filter => {
    setFilters(f =>
      f.filter(f => f.category !== filter.category || f.name !== filter.name)
    );
  };

  const renderTable = () => {
    return <Table data={sortedPlayers} />;
  };

  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-lg-2 col-12">
          <FilterBox
            enableFilter={enableFilter}
            disableFilter={disableFilter}
            filters={filters}
          />
        </div>
        <div className="col-lg-10 col-12">
          <SortBox sort={sort} changeSort={changeSort} />
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default App;
