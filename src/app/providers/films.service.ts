import { Injectable } from '@angular/core';
import {Film, ResponseOmdbApi} from "../models/film";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, Observer, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  //le paramètre year peut être null donc il est placé en dernier avec ?
  public search(title: string, type: string, year?: number): Observable<Array<Film>> {
    const url = `http://www.omdbapi.com/?apikey=716318f9&s=${title}&y=${year}`
    return this.http
      .get<ResponseOmdbApi>(url)
      .pipe(
        map<ResponseOmdbApi,Array<Film>>(data =>
        data.Search.map<Film>(e => ({
            title:e.Title,
            year:e.Year,
            poster:e.Poster
          }))
        )
      )

  }
}
