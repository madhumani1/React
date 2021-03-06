import React, { useState } from 'react';

/**
 * 1. Add an event handler to the input element whenever its value changes. 
 * Set its value to be the one stored in doctorName state.
 * 
 * 2. Add an event handler that will be triggered when the AddDoctor button is clicked
 * (onClick prop for the button element). 
 * We want it to take the doctor name and pass it up to the DoctorsList component 
 * to add to the list of doctors. For now, we'll do a console.log to check that 
 * we have the correct value for the doctor name.
 */
export default function AddDoctor(props) {
    const [doctorName, setDoctorName] = useState(() => {
        console.log('run function');
    });

    const handleAddDoctor = () => {
        props.onAddDoctor(doctorName);
        console.log('doctorName: ',doctorName);
    		setDoctorName('');	// to clear text box after use
    };

    return(
        <div>
            <input type='text' value={doctorName} 
                onChange={changeEvent => setDoctorName(changeEvent.target.value)}  />
            <button onClick={handleAddDoctor}>Add Doctor</button>
        </div>
    );
};
