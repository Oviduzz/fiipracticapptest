import {Component, Input, OnInit} from '@angular/core';
import {AriasService} from '../../services/arias.service';

@Component({
  selector: 'app-arias',
  templateUrl: './arias.component.html',
  styleUrls: ['./arias.component.scss']
})
export class AriasComponent implements OnInit {
  @Input() ariaCategory;
  filteredArias = [];
  private arias = [];

  constructor(private ariasService: AriasService) {
  }

  ngOnInit() {
    this.getArias();
  }

  getArias() {

    this.arias = this.ariasService.getArias();
    if (this.filteredArias.length < 1) {
      this.filteredArias = this.arias;
    }
  }

  getAriaClicked(ariaCategory) {
    this.ariasService.setAriaCategory(ariaCategory);
  }

  customFunc(event) {
      this.filteredArias = this.arias.filter(aria => aria.stack.includes(event));
  }
}
