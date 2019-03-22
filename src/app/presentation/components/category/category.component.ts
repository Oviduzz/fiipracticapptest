import {Component, Input, OnInit} from '@angular/core';
import {TrainersService} from '../../../shared/trainers.service';
import {AriasService} from '../../services/arias.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public trainers = [];
  public arias = [];

  constructor(private trainersService: TrainersService,
              private ariasService: AriasService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getTrainers();
    this.getArias();
  }

  getTrainers() {
    const trainers = this.trainersService.getTrainers();
    // this would be used if we use set and get
    // const categoryClicked = this.ariasService.getAriaCategory();
    // this.trainers = trainers.filter(trainer => trainer.category === categoryClicked);
    this.route.params.subscribe(
      (params: Params) => {
       this.trainers = trainers.filter(trainer => trainer.category === params.aria);
      }
    );
  }
  getArias() {
    this.route.params.subscribe(
      (params: Params) => {
        this.arias = this.ariasService.getArias().filter(aria => aria.category === params.aria);
        console.log(this.arias);
      }
    );
  }
}
