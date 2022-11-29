import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookform: any = new FormGroup({
    'title': new FormControl(''),
    'description': new FormControl(''),
    'author': new FormControl('')
  })
  constructor(private api: ApiService) { }


  books: any = []
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.api.getbooklist().subscribe(res => {
      this.books = res;
      console.log("incoming Data", res);
    })
  }
  deleteBook(id: any) {
    this.api.deletebook(id).subscribe(res => {
      alert("data deleted sucessfully")
    })


  }

}
