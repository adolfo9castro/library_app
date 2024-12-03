import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  books = [
    { id: "uuid", title: 'On the Road', author: 'Jack Kerouac', read: true },
    { id: "uuid", title: 'Harry Potter and the Philosopher\'s Stone', author: 'J. K. Rowling', read: false },
  ];

  newBook = { title: '', author: '', read: false };

  displayedColumns: string[] = ['title', 'author', 'read', 'actions'];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.apiService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  createBook(): void {
    this.apiService.createBook(this.newBook).subscribe(() => {
      this.getBooks();
      this.newBook = {title: '', author: '', read: false };
    });
  }

  updateBook(id: string, book: any): void {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      width: '400px',
      data: { ...book }
    });  

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
        const { id: _, ...updatedBook } = result
  
        this.apiService.updateBooks(id, updatedBook).subscribe(() => {
          this.getBooks();
        });
      }
    });
  }

  deleteBook(id: string): void {
    this.apiService.deleteBooks(id).subscribe(() => {

      this.books = this.books.filter((book) => book.id !== id);
    });
  }
}