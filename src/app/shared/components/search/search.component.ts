import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  @Output() sendCount: EventEmitter <any> = new EventEmitter<any>();
  filteredArias = Observable;
  constructor() { }

  ngOnInit() {
   this.searchInput.valueChanges.pipe(
     debounceTime(300)
   ).subscribe(res => {
     this.sendCount.emit(res);
   });
  }

}
