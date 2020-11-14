import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient }from '@angular/common/http';
import { environment } from './../environments/environment';
import { Repo } from './repo';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users:User[]=[];
  repos:Repo;
  apiURL='https://api.github.com/users/';
  token= `?access_token=${environment.apiKey}`;


  constructor(private http:HttpClient) {

  }
  searchUser(UserName:string){
      interface ApiResponse{
          name:string,
           login:string, 
           avatar_url:any,
           bio:string,
           public_repos:number,
           followers:number,
           following: number,
           created_at:Date,
           html_url:any,
    
       }
       return new Promise((resolve,reject)=>{
         this.users=[];

         this.http.get<ApiResponse>(this.apiURL+UserName+ this.token).toPromise().then(
           (res)=>{
             
             this.users.push(res);
             resolve();
           },
           (error) =>{
               reject();
             }
         )

       })
}

searchRepos(UserName:string){
  interface ApiResponse{
    html_url:any,
    name: string,
    description:string,
    language:string,
    created_at: Date

   }
   return new Promise((resolve,reject)=>{
     

     this.http.get<ApiResponse>(this.apiURL+UserName+ '/repos' + this.token).toPromise().then(
       (res)=>{
         this.repos = res;
         resolve();
       },
       (error) =>{
           reject();
         }
     )

   })
}

}