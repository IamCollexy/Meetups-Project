import React from 'react'
import classes from '../Meetups/MeetupsList.module.css';
import MeetupsItem from './MeetupsItem';


const MeetupsList = (props) => {
  return (
    <ul className={classes.list}>
        {props.meetups.map((meetup) => (
            <MeetupsItem 
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            />
        
           ) )}
      </ul>
  );
}

export default MeetupsList