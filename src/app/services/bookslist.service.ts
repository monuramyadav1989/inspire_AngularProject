import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookslistService {

  url = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private http_:HttpClient) { }

  //get all books list through http
  getBooks(){
    return this.http_.get<any>(this.url);
  }
}
