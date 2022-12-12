import { Component, OnInit } from '@angular/core';
import { BookslistService } from './services/bookslist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularBooksProject';
  authorDetails:any;
  booksList: any[] = [];

  constructor(private service:BookslistService) { }

  ngOnInit() {
    this.service.getBooks().subscribe(res =>{
      this.authorDetails = res.data;
      this.booksList = res.data.books;
    })
  }

  //toggle list
  toggleBooksList(e:any){
    if(e.target.value == 1){   
      this.booksList.sort((a, b) => {
        const bookA = a.title.toUpperCase(); 
        const bookB = b.title.toUpperCase(); 
        if (bookA < bookB) {
          return -1;
        }
        if (bookA > bookB) {
          return 1;
        }
        return 0;
      });
    }
    else{
        this.booksList = this.booksList.sort((a, b) => a.PublishDate - b.PublishDate);
    }
    
  }

}
