import fire from '../../config/fire-config';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Itinerary = (props) => {
  const [itinerary, setItinerary] = useState(null);

  useEffect(() => {
    fire.firestore()
    .collection('users')
    .doc(fire.auth().currentUser.uid)
    .collection('itineraries')
    .doc(props.id)
    .get()
    .then(result => {
      setItinerary(result.data())
    })
  }, []);

  if(!itinerary){
    return (
      <h2>Just a sec...</h2>
    )
  }

  return (
    <div>
      <h2>{itinerary.tripName}</h2>
      <Link href='/users/dashboard'>
        <a>Back</a>
      </Link>
    </div>
  )
}

Itinerary.getInitialProps = ({ query }) => {
  return {
    id: query.id,
  }
}

export default Itinerary




