import React from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
