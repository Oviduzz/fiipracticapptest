import { Component, OnInit } from '@angular/core';
import {PresentationDetailsService} from '../../services/presentation-details.service';
import {PresentationDetails} from '../../interfaces/presentation-details';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  presentationData: PresentationDetails;
  constructor(private presentationDetailsService: PresentationDetailsService) { }

  ngOnInit() {
    this.getPresentationDetails();
  }
  getPresentationDetails(): void {
     this.presentationDetailsService.getPresentationDetails().subscribe((data) => {
       this.presentationData = data;
     });
  }
}
