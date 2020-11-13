import { Component, OnInit } from '@angular/core';
// import { Repos} from '../repos';
// import { ProfileService} from '../profile.service';
// import { User } from '../user';
// import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:ReposComponent;

  constructor() { }
  // getRepos(repos){
  //   this.profileService.getRepos(repos)
  //   .then(
  //     ( success)=>{
  //       this.repos = this.profileService.repos;
  //       console.log(this.repos);
        
  //     },
  //     (error)=>{
  //       console.log(error)
  //     }
  //    )
  // }

  ngOnInit(): void {
    // this.getRepos("Quotes");
    
  }

}
