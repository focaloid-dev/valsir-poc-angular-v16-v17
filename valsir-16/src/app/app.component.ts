import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription, distinctUntilChanged, filter, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Valsir-16';
  lang: string = '';
  private routerSubscription: Subscription;
  private routeParamsSubscription: Subscription | undefined;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en')

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event.url);
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onRouteChange(url: string): void {
    console.log('Route changed:', url);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }
}
