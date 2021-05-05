import { Component, OnInit } from '@angular/core';
import {LocalFeatureServiceService} from '../services/local-feature-service.service';
import {TurtleService} from '../services/turtle.service';

@Component({
  selector: 'app-first-feature',
  templateUrl: './first-feature.component.html',
  styleUrls: ['./first-feature.component.scss']
})
export class FirstFeatureComponent implements OnInit {

  constructor(private localFeature: LocalFeatureServiceService, private turtleService: TurtleService) { }

  name = 'John';

  ngOnInit(): void {
  }

  update(name: string): void {
    this.localFeature.updateName(name);
  }
}
