import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flag} from '../models/flag';
import {TurtleService} from './turtle.service';

@Injectable({
  providedIn: 'root'
})
export class LocalFeatureServiceService {

  constructor(private http: HttpClient, private turtle: TurtleService) { }


  nameFeature: boolean;
  updateFeature: boolean;
  customizeFeature: boolean;

  getFeatures(): void {
    this.http.get('http://localhost:8080/turtle/features')
      .toPromise()
      .then((response: any) => {
        this.nameFeature = response.nameFeature;
        this.updateFeature = response.updateFeature;
        this.customizeFeature = response.customizeFeature;
      });
  }

  getFeaturesFromAzure(): void {
    this.http.get('http://localhost:8080/turtle/azure')
      .toPromise()
      .then((response: any) => {
        this.nameFeature = response.nameFeature;
        this.updateFeature = response.updateFeature;
        this.customizeFeature = response.customizeFeature;
      });
  }

  updateName(name: string): void {
    this.http.put('http://localhost:8080/turtle/data/' + name, {})
      .toPromise()
      .then((response: any) => {
        this.turtle.set(response.name);
        alert('Awesome, your turtle data is saved.');
      });
  }
}
