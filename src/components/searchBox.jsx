import React from 'react';

const SearchBox = ({ value, onChange, ...rest }) => {
  return (
    <input
      {...rest}
      type="text"
      name="query"
      className="form-control my-3"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
