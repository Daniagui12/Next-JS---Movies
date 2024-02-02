import type { Movie } from '@/app/lib/models/movie';


// This class will be used for fetching the movie data from the JSON file

export async function fetchMovies(): Promise<Movie[]> {
    const response = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json');
    const movies = await response.json();
    return movies;
}