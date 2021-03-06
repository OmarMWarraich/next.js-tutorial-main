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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
            },
         },
         { 
            params: {
                meetupId: 'm2',
        },
     },
        ],
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: 
                    'https://upload.wikimedia.org/wikipedia/commons/9/97/Karlovy_Vary_Sadov%C3%A1_ulice_(1).jpg',
                id: 'meetupId',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup',    
            },
        },
    }
}

export default MeetupDetails;