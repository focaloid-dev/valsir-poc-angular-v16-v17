import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Product {
  id: number;
  product_name: string;
  color: string;
  image_url: string;
  unit: string;
  depth: number;
  form_container: boolean;
  counter_plate: boolean;
  u_shaped_copper: boolean;
  angle?: boolean; // Optional property
  support_drain?: boolean; // Optional property
  central_faucet: boolean;
  type: string | null;
}

@Injectable({
  providedIn: 'root'
})

export class MainService {
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<Product[]>('../assets/db/index.json')
  }

  getDepthByColor() {
    return this.getAllProducts()
  }
  getCounterPlates() {
    return this.getAllProducts()
  }

  getFormContainers() {
    return this.getAllProducts()
  }

  getUShapedCoppers() {
    return this.getAllProducts()
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

  filterByKeysAndValues<T>(array: T[], filterObj: Partial<T>): T[] {
    return array.filter(item =>
      Object.entries(filterObj).every(([key, value]) => item[key as keyof T] === value)
    );
  }
}
