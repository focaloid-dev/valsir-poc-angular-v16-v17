import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.inteface';
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

  filterObjectsByKey(array: Product[], key: string) {
    return array.filter(obj => key in obj);
  }

  filterByKeysAndValues<Product>(array: Product[], filterObj: Partial<Product>): Product[] {
    return array.filter(item =>
      Object.entries(filterObj).every(([key, value]) => item[key as keyof Product] === value)
    );
  }
}
