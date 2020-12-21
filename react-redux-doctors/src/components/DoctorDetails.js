import React from 'react'

export default function DoctorDetails({dob,speciality, address}) {
    return (
        <div>
            <h5>dob: {dob}</h5>
            <h5>speciality: {speciality}</h5>
            <h5>adress: {address}</h5>
        </div>
    )
}
