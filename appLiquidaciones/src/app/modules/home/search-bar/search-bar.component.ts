import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchData } from 'src/app/interfaces/employees/search-data';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() eventSearch: EventEmitter<SearchData> = new EventEmitter();
  searchData: SearchData = {toSearch: "", typeSearch: true};

  typeSelection(value: boolean){
    this.searchData.typeSearch = value;
  }

  search(){
    this.eventSearch.emit(this.searchData);
  }

  oneKeyup(){
    if (this.searchData.toSearch == ""){
      this.eventSearch.emit(this.searchData);
    }
  }
}
