import { Link } from "react-router-dom";
import classes from '../layout/MainNavigation.module.css';
import {useContext} from 'react'
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
     const favoritesCtx = useContext(FavoritesContext)

    return <header className={classes.header}>
<div
className={classes.logo}
>React Meetups</div>
<nav>
    <ul>
        
    <li>
        {/* Already on React Page No need to send new request to the server  */}
        {/* send New Request to the Server  */}
        <Link to="/">All Meetups</Link>
    </li>
    <li>
        <Link to="/new-meetups">Add New Meetup</Link>
    </li>
    <li>
        <Link to="/favorites">My Favorites
        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
        </Link>
    </li>
    </ul>
</nav>
    </header>
};

export default MainNavigation;