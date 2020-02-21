import React from 'react';

function Table({ data }) {
  // Use this for showing thead
  const fields = [
    '#',
    'short_name',
    'age',
    'nationality',
    'club',
    'overall',
    'value',
    'preferred_foot',
    'team_position'
  ];
  return (
    <table id="players-table" className="table table-bordered">
      <thead>
        <tr>
          {fields.map(field => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((player, i) => (
          <tr key={i}>
            {fields.map(field => (
              <td key={field}>{field === '#' ? i + 1 : player[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
