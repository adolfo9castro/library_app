import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/books`);
  }

  createBook(books: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/books`, books);
  }

  updateBooks(id: string, books: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/books/${id}`, books);
  }

  deleteBooks(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
}
