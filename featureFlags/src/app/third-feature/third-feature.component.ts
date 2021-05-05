import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-feature',
  templateUrl: './third-feature.component.html',
  styleUrls: ['./third-feature.component.scss']
})
export class ThirdFeatureComponent implements OnInit {

  constructor() { }

  crazyText = '';

  ngOnInit(): void {
  }

  customize(): void {
    const num = Math.floor(Math.random() * 6) + 100000;
    for (let i = 0; i < num; i++) {
      this.crazyText += '%';
    }
    throw new Error('Customize your turtle is not working right now.');
  }

}
