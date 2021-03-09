import React from "react";
import NewMeetupForm from "../components/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetupPages = () => {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-refresher-f2e95-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => history.replace('/'));
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPages;
