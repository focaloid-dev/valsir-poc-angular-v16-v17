import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class MainService {
  constructor(private http: HttpClient) { }

  /**
   * Retrieves all products from the database.
   *
   * @returns {Observable<Product[]>} An Observable that emits an array of Product objects retrieved from the local database.
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/db/index.json');
  }

  /**
 * Filters an array of products by a specified key, ensuring unique values.
 *
 * @param {Product[]} array The array of products to filter.
 * @param {keyof Product} key The key used to filter the products.
 * @return {Product[]} Returns a new array containing products with unique values for the specified key.
 */
  filterProductsByUniqueKey<T extends keyof Product>(array: Product[], key: T): Product[] {
    const uniqueValues = new Set();
    return array.filter(product => {
      if (key in product) {
        const value = product[key];
        if (!uniqueValues.has(value)) {
          uniqueValues.add(value);
          return true;
        }
      }
      return false;
    });
  }

  /**
  * Filters an array of objects based on key-value pairs in a filter object.
  *
  * @param {Product[]} array The array of objects to filter.
  * @param {Partial<Product>} filterObj The filter object containing key-value pairs.
  * @return {Product[]} Returns a new array containing only objects that match all key-value pairs in the filter object.
  */
  filterProductByKeysAndValues<Product>(array: Product[], filterObj: Partial<Product>): Product[] {
    return array.filter(item =>
      Object.entries(filterObj).every(([key, value]) => item[key as keyof Product] === value)
    );
  }
}
