import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Repo } from '../repo'
import { SearchService} from '../search.service'
import { User } from '../user';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>();

UserName:string;
  constructor(searchService:SearchService){
  this.UserName = this.UserName;
    console.log(this.UserName)
  }
  get() {
    this.emitSearch.emit(this.UserName);
    // this.emitSearch.emit(this.repo);  
    this.UserName;                                                                                                                                                                             
  }

  ngOnInit(): void {
  }

}
