import { Component, OnInit } from '@angular/core';
import {LocalFeatureServiceService} from '../services/local-feature-service.service';
import {TurtleService} from '../services/turtle.service';

@Component({
  selector: 'app-second-feature',
  templateUrl: './second-feature.component.html',
  styleUrls: ['./second-feature.component.scss']
})
export class SecondFeatureComponent implements OnInit {

  name: string;

  constructor(private turtleService: TurtleService) { }

  ngOnInit(): void {
    this.name = this.turtleService.get();
  }

}
