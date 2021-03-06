
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Karlovy_Vary_Sadov%C3%A1_ulice_(1).jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://th.bing.com/th/id/R5adee1d22057903556e9ce5d8a75ce05?rik=NiqX8VYiC0zN0g&pid=ImgRaw',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },
    {
        id: 'm3',
        title: 'A Third Meetup',
        image: 'https://th.bing.com/th/id/OIP.pF-tTnr0k-9eQpkXLSIG_gHaE8?pid=ImgDet&rs=1',
        address: 'Some address 15, 12345 Some City',
        description: 'This is a third meetup!'
    }

]



function HomePage(props) {
    
    return(
                <MeetupList meetups={props.meetups} />
        
    );
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    // fetch data from an API
    return{
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
        //pageregenerated every10 seconds when requests coming
    };
}

export default HomePage;