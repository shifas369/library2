import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  [x: string]: any;
  bookform: any = new FormGroup({
    'title': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'type': new FormControl('',Validators.required)
  })

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    //  console.log(this.studentform.value);
      this.apiservice.addbook(this.bookform.value).subscribe({
        complete: () => {
          alert('data saved successfully');
          this ['api'].navigate('/books');
        }
      })
  
    }
}
