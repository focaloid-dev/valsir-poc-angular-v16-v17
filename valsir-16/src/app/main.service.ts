import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }
  getColors() {
    return this.http.get<any>('../assets/db/index.json')
  }
  getDepthByColor() {
    return this.getColors()
  }
  getCounterPlates() {
    return this.getColors()
  }

  getFormContainers() {
    return this.getColors()
  }

  getUShapedCoppers() {
    return this.getColors()
  }

  filterObjectsByKeyAndDistinct(array: any[], key: string) {
    const uniqueValues = new Set();
    return array.filter(obj => {
      if (key in obj) {
        const value = obj[key];
        if (!uniqueValues.has(value)) {
          uniqueValues.add(value);
          return true;
        }
      }
      return false;
    });
  }

  filterObjectsByKey(array: any[], key: string) {
    return array.filter(obj => key in obj);
  }
}
