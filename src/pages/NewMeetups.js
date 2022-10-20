import React from 'react'
import NewMeetupForm from '../component/Meetups/NewMeetupForm';
import {useNavigate} from 'react-router-dom'

function NewMeetups() {
  const navigate = useNavigate();

function addMeetupHandler (meetupData) {
fetch('https://react-sumry-default-rtdb.firebaseio.com/meetups.json',
{
  method: 'POST',
  body: JSON.stringify(meetupData),
  headers: {
    'Content-Type': 'application/json',
  },
}
).then(() => {
  navigate('/')
})
}


  return (
 <section>
  <h1>Add New Meetups</h1>
<NewMeetupForm onAddMeetup={addMeetupHandler}/>
 </section>
  )
}

export default NewMeetups;