import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Repo } from '../repo';
import { User } from '../user';
import { SearchService } from '../search.service';
import { RepoService } from '../repo.service'
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  repos: Repo;
  users :User[];  

  constructor(public searchService: SearchService, public serviceRepo:RepoService ) { }

  searchUser(UserName){
    this.searchService.searchUser(UserName).then(
     ( success)=>{
       this.users= this.searchService.users;
      
     },
     (error)=>{
       console.log(error)
     }
    )


    this.searchService.searchRepos(UserName).then(
      ( success)=>{

        
        this.repos = this.searchService.repos;
        
      },
      (error)=>{
        console.log(error)
      }
     )
  }


  
  ngOnInit(): void {
    this.searchUser("sharon0812");
  }
 
}
