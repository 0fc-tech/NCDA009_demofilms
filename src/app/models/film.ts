export interface Film {
  title : string;
  year: number;
  poster: string;
}


export interface OmdbFilmFilm {
  Title : string;
  Year: number;
  Poster: string;
}
export interface ResponseOmdbApi{
  Response: boolean;
  Search : Array<OmdbFilmFilm>
}
