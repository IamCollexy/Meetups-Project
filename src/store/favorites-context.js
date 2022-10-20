import { createContext, useState  } from "react";

// In this Case, Context is  a Js Object 
   const FavoritesContext = createContext({
       favorites: [],
       totalFavorites: 0,
       addFavorite: (favoriteMeetup) => {},
       removeFavorite: (meetupId) => {},
       itemIsFavorite: (meetupId) => {}
   });

   export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);
    

    // Store the user favorites in LocalStorage 
    function addFavoriteHandler(favoriteMeetup) {
        // Instead of this since the the fav depends on the prevFav snapShot
        // setUserFavorites(userFavorites.concat(favoriteMeetup));
        setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function ItemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    
    

    const context =  {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: ItemIsFavoriteHandler

    };

    return <FavoritesContext.Provider value={context}>
{props.children}
    </FavoritesContext.Provider>
   }
   export  default FavoritesContext;