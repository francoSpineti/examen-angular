import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http : HttpClient){}

  git = "https://api.github.com/users/francoSpineti";

  getData(){
    return this.http.get(this.git);
  }
}
