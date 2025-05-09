import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private apiUrl: string = 'http://localhost:8080/file';
  
  constructor(private http: HttpClient) {}

  public getVideoUrl(filename: string): string{
    return `${this.apiUrl}/${filename}`;
  }

  public videoExists(filename: string): Observable<boolean>{
    const url = this.getVideoUrl(filename); // monta a URL aqui

    return this.http.get(url, { responseType: 'blob'}).pipe(
      map(() => true),
      catchError( () => of(false))
    )
  }

}
