import React, {useState, createContext} from 'react';




export const MovieContext = createContext();
export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'American Psycho',
            price: '$20',
            id: 12345
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 6789
        },
        {
            name: 'Lord of the Rings',
            price: '$5',
            id: 11234
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}