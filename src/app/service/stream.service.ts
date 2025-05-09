import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private apiUrl: string = 'http://localhost:8080/file';
  
  public getVideoUrl(filename: string){
    return `${this.apiUrl}/${filename}`;
  }

}
