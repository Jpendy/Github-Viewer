import React from 'react';
import PropTypes from 'prop-types';

const List = ({ repoList }) => {
    
  const listElements = repoList.map(item => {
    <li key={ item }>
      { item }
    </li>;
  });

  return (
    <ul>
      { listElements }
    </ul>
  );

};

List.propTypes = {
  repoList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;
