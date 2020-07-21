import React from 'react';
import PropTypes from 'prop-types';

const List = ({ repoList }) => {
    
  const listElements = repoList.map(item => {
    return (<li key={ item }>
      { item.name }
    </li>);
  });

  return (
    <ul>
      { listElements }
    </ul>
  );

};

List.propTypes = {
  repoList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
