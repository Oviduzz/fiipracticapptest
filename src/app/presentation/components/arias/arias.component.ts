import {Component, Input, OnInit} from '@angular/core';
import {AriasService} from '../../services/arias.service';

@Component({
  selector: 'app-arias',
  templateUrl: './arias.component.html',
  styleUrls: ['./arias.component.scss']
})
export class AriasComponent implements OnInit {
  @Input() ariaCategory;
  private arias = [];
  constructor(private ariasService: AriasService) {
  }

  ngOnInit() {
    this.getArias();
  }

  getArias() {
    this.arias = this.ariasService.getArias();
  }
  getAriaClicked(ariaCategory) {
    this.ariasService.setAriaCategory(ariaCategory);
  }
}
