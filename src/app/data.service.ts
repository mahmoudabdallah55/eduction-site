import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http"
import { get } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {

   }
  getNewsData():Observable<any> {
    return this.http.get("http://51.20.43.250:8000/news/")
  }
  getNewsDetials(id:string):Observable<any> {
    return this.http.get(`http://51.20.43.250:8000/news/${id}/`)
  }



}
