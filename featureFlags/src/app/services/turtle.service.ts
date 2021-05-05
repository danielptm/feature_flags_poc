import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurtleService {
  name: string;
  constructor() { }

  set(name: string): void {
    this.name = name;
  }

  get(): string {
    return this.name;
  }
}
