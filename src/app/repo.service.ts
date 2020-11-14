import { Injectable } from '@angular/core';
import{ environment } from '../environments/environment';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  apiURL='https://api.github.com/users/';
  token= `?access_token=${environment.apiKey}`;

  constructor(public http:HttpClient) { }

  searchRepos(UserName:string):Observable<any>{
    return this.http.get(this.apiURL+ UserName + '/repos'+ this.token);
  }
}


