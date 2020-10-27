import React, {Component} from 'react';
import DoctorItemList from './DoctorListItem';
import AddDoctor from './AddDoctor';
import fetch from 'node-fetch';

export default class DoctorsList extends Component {
    constructor(props) {
        super(props);
        this.state = {doctors: []};
    }

    componentDidMount() {
        fetch('http://localhost:4001/api/v1/doctors')
            .then(response => response.json())
            .then(result => this.setState({doctors: result}));
        console.log('doctors: ',this.state);
    }

    renderDoctors() {
        // return this.state.doctors.map(doctor => <div key={doctor.id}>{doctor.name}</div>);
        return this.state.doctors.map(
            doctor => <DoctorItemList id={doctor.id.toString()} key={doctor.id} name={doctor.name}/>)
    }

    handleAddDoctor(name) {
        const newDoctor = { id: this.state.doctors.length+1, name: name };
        const newDoctorsList = [...this.state.doctors, newDoctor];
        this.setState({ doctors: newDoctorsList });
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newDoctor.name })
        };
        fetch('http://localhost:4001/api/v1/doctors', requestOptions);
    }

    render() {
        return (
            <>
                <div>Doctors List</div>
                <AddDoctor onAddDoctor={(name) => this.handleAddDoctor(name)} />
                {this.renderDoctors()}
            </>
        );
    }
}