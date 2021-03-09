import React, { useState, useEffect } from "react";
import MeetupList from "../components/MeetupList";

const AllMeetupsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch('https://react-refresher-f2e95-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(data => {

                const meetups = Object.keys(data).reduce((acc, curr) => {
                    acc.push({
                        id: curr,
                        ...data[curr]
                    });
                    return acc;
                }, []);

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);


    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
