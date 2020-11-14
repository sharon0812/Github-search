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
  

UserName:string;

@Output() emitSearch = new EventEmitter<any>();

  constructor(){}
  
  get() {
    this.emitSearch.emit(this.UserName);
                                                                                                                                                                                
  }

  ngOnInit(){
  }

}
