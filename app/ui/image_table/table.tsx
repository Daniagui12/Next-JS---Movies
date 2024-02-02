// This file will have the table react component to display the images. Two columns name and image of the movie. useState and useEffect hooks are required
'use client';

import { fetchMovies } from "@/app/lib/fetchUtils";
import { useState, useEffect } from "react";
import { Movie } from "@/app/lib/models/movie";
import Image from "next/image";

const loader = ({ src }: { src: string }) => {
  return src;
};

export default function ImageTable() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovies().then((movies) => setMovies(movies));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, overflowY: 'auto', maxHeight: '500px', paddingRight: '15px' }}>
        <table>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Image</th>
              <th>Cast</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.title}>
                <td>{movie.title}</td>
                <td>
                  <Image 
                    loader={loader}
                    src={movie.thumbnail} 
                    alt={movie.title} 
                    width={movie.thumbnail_width}
                    height={movie.thumbnail_height}
                    onClick={() => setSelectedMovie(movie)}
                    />
                </td>
                <td>{movie.cast.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedMovie && (
        <div style={{ flex: 1, paddingLeft: '15px' }}>
            <div>
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.extract}</p>
              <Image
                loader={loader}
                src={selectedMovie.thumbnail}
                alt={selectedMovie.title}
                width={selectedMovie.thumbnail_width}
                height={selectedMovie.thumbnail_height}
              />
            </div>
        </div>
      )}
    </div>
  );
}
