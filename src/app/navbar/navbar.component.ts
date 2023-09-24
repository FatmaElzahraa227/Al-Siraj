import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLandingPage = false;
  isContactUS = false;
  isAlSiraj = false;
  isSst = false;
  notfound = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLandingPage =
          event.url === '/landing-page' ||
          event.url === 'landing-page' ||
          event.url === '/';
        this.isContactUS =
          event.url === '/contact-us' || event.url == 'contact-us';
        this.isAlSiraj = event.url === '/al-siraj' || event.url == 'al-siraj';
        this.isSst =
          event.url === '/sst-international' ||
          event.url == 'sst-international';
        if (
          this.isLandingPage == false &&
          this.isContactUS == false &&
          this.isAlSiraj == false &&
          this.isSst == false
        ) {
          this.notfound = true;
        } else {
          this.notfound = false;
        }
      });
  }
}
