import React, {Component} from 'react';
import DoctorListItem from './DoctorListItem';
import AddDoctor from './AddDoctor';
import fetch from 'node-fetch';

export default class DoctorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {doctors: []};
    }

    componentDidMount(props) {
        fetch('http://localhost:4001/api/v1/doctors', {
            method: 'get',
            dataType: 'json',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => this.setState({doctors: result}));
        console.log('doctors: ',this.state);
    }

    renderDoctors() {
        // return this.state.doctors.map(doctor => <div key={doctor.id}>{doctor.name}</div>);
        return this.state.doctors.map(
            doctor => <DoctorListItem key={doctor.id} id={doctor.id.toString()} name={doctor.name}/>)
    }

    handleAddDoctor = (doctorName) => {
        const newId = (this.state.doctors.length+1).toString();
        const newDoctor = {id: newId, name: doctorName};
        const newDoctorList = [...this.state.doctors, newDoctor];
        this.setState({doctors: newDoctorList});
        console.log('this.state.doctors: ',this.state.doctors);
        fetch('http://localhost:4001/api/v1/doctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newDoctor.name })
        });
    }

    render() {
        return (
            <>
                <h2>Doctors List</h2>
                <AddDoctor onAddDoctor={(doctorName) => this.handleAddDoctor(doctorName)} />
                <div>{this.renderDoctors()}</div>
            </>
        );
    }
}