import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail 
        image='https://upload.wikimedia.org/wikipedia/commons/9/97/Karlovy_Vary_Sadov%C3%A1_ulice_(1).jpg'
        title='A First Meetup'
        address='Some Street 5, Some City'
        description='This is a first meetup'
        /> 
    );
}

export default MeetupDetails;