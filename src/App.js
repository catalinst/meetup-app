import React from "react";
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NewMeetupPages from "./pages/NewMeetupPage";
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
