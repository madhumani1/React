import React from 'react';
import PropTypes from 'prop-types';

export default function DoctorListItem({id, name}) {
    return <div key={id}>{name}</div>;
}

DoctorListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };