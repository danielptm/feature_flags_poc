import {Component, OnInit} from '@angular/core';
import {LocalFeatureServiceService} from './services/local-feature-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'featureFlags';

  constructor(public localFlags: LocalFeatureServiceService) {

  }

  ngOnInit(): void {
    // this.localFlags.getFeatures();
    this.localFlags.getFeaturesFromAzure();
  }


}
