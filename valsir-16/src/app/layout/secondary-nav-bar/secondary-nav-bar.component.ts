import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-nav-bar',
  templateUrl: './secondary-nav-bar.component.html',
  styleUrls: ['./secondary-nav-bar.component.scss']
})
export class SecondaryNavBarComponent {
  selectedType: string = '';
  selectedSize: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
