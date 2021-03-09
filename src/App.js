import React from "react";
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPages from "./pages/NewMeetup";
import Layout from "./components/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact >
                    <AllMeetupsPage />
                </Route>
                <Route path={'/favorites'} >
                    <FavoritesPage />
                </Route>
                <Route path={'/new-meetup'} >
                    <NewMeetupPages />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
