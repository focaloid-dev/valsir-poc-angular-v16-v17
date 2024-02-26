import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreadcrumbItem } from '../models/bread-crumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbItemsSubject: BehaviorSubject<BreadcrumbItem[]> = new BehaviorSubject<BreadcrumbItem[]>([]);
  breadcrumbItems$: Observable<BreadcrumbItem[]> = this.breadcrumbItemsSubject.asObservable();

  constructor() { }

  private removeDuplicateItems(items: BreadcrumbItem[]): BreadcrumbItem[] {
    const uniqueItems = [];
    const seenItems = new Set<string>();

    for (const item of items) {
      if (!seenItems.has(item.text)) {
        uniqueItems.push(item);
        seenItems.add(item.text);
      }
    }

    return uniqueItems;
  }

  addBreadcrumbItem(item: BreadcrumbItem) {
    const currentItems = this.breadcrumbItemsSubject.value;
    const newItems = this.removeDuplicateItems([...currentItems, item]);
    this.breadcrumbItemsSubject.next(newItems);
  }

  setBreadcrumbItems(items: BreadcrumbItem[]) {
    const uniqueItems = this.removeDuplicateItems(items);
    this.breadcrumbItemsSubject.next(uniqueItems);
  }

  clearBreadcrumb() {
    this.breadcrumbItemsSubject.next([]);
  }
}
