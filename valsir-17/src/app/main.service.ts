import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<any>('../assets/db/index.json')
  }
  getDepthByColor() {
    return this.http.get<any>('../assets/db/depths.json')
  }
  getCounterPlates() {
    return this.http.get<any>('../assets/db/counter-plate.json')
  }

  getFormContainers() {
    return this.http.get<any>('../assets/db/form-containers.json')
  }

  getUShapedCoppers() {
    return this.http.get<any>('../assets/db/u-shaped-copper.json')
  }
}
