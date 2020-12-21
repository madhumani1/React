import React, {useState} from 'react';
import DoctorDetails from './DoctorDetails';
import PropTypes from 'prop-types';

export default function DoctorListItem({id, name}) {
    //return <div key={id}>{name}</div>;
	  const [details, setDetails] = useState(()=>console.log(''));
    const url = `http://localhost:4001/api/v1/doctorDetail/${id}`;

    console.log('Doctor List Item url: ',url);
    return (
        <div key={id}>
            <a href='#' onClick={() => {
                fetch(`http://localhost:4001/api/v1/doctorDetail/${id}`, {
                    method: 'get',
                    dataType: 'json',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(result => {
                    console.log('result: ',result);
                    setDetails(result);
                });
            } }>
                {name}
            </a>
            {details && (
                <DoctorDetails
                dob={details.dob}
                specialty={details.specialty}
                address={details.address}
                {...details}
                />
            )}
        </div>
    );
}

DoctorListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };