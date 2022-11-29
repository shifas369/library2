import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
//apiUrl: string ='api';
   apiUrl: string ='http://localhost:3000/api'

  constructor( private http:HttpClient ) { }
  
// to fetch all items
getbooklist(){
  return this.http.get(`${this.apiUrl}/booklist`)
}

 // to delete book
 
 deletebook(id:any){
  return this.http.delete(`${this.apiUrl}/book/${id}`)
 }

// to add new book


addbook(data:any){
  return this.http.post(`${this.apiUrl}/book`,{data})
}


//to update existing book


getsinglebooklist(id:any){
  return this.http.get(`${this.apiUrl}/booklist/${id}`)
}

}
