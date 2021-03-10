import React, { useContext } from "react";
import classes from '../styles/MeetupItem.module.css';
import Card from "./Card";
import FavoritesContext from "../store/favorites-context";

const MeetupItem = (props) => {

    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    const btnDescription = itemIsFavorite ? 'Remove from Favorites' : 'To Favorites';

    function toggleStatusFavoriteHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({...props});
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleStatusFavoriteHandler}>{btnDescription}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
