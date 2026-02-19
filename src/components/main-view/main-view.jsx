import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Jaws",
            description: "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to the local police chief, a marine biologist, and an old seafarer to hunt the beast down.",
            genre: { name: "Horror" },
            director: { name: "Steven Spielberg" },
            image:
                "https://upload.wikimedia.org/wikipedia/commons/4/40/Jaws_movie_poster.jpg",
        },
        {
            id: 2,
            title: "The Dark Knight",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept...",
            genre: { name: "Action" },
            director: { name: "Christopher Nolan" },
            image:
                "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        },
        {
            id: 3,
            title: "The Matrix",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war...",
            genre: { name: "Sci-Fi" },
            director: { name: "Lana Wachowski" },
            image:
                "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};