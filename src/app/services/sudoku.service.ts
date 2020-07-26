import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  constructor(private http: HttpClient) {}

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getSudokuSolution(sudokuStr: string): Observable<Blob> {
    console.log("solution requeted at url",environment.apiUrl + sudokuStr)
    return this.getImage(environment.apiUrl + sudokuStr);
  }
}