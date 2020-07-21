import React from 'react';
import PropTypes from 'prop-types';
// import styles from './ShortFrom.css';

const ShortForm = ({ userName, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' value={ userName } onChange={ onChange }></input>
    <button>Submit</button>
  </form>
);

ShortForm.propTypes = {
  userName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ShortForm;
