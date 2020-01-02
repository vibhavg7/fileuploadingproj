import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { UserService } from './user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Demo Project';
  loading = true;
  constructor(
              private authService: UserService,
              private router: Router) {
    router.events.subscribe((routerevent: Event) => {
      this.checkRouterEvent(routerevent);
    });

  }

  togglemenu() {
    $('#wrapper').toggleClass('toggled');
  }

  checkRouterEvent(navigatorEvent: Event) {
    // console.log('checkRouterEvent');
    if (navigatorEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (navigatorEvent instanceof NavigationEnd ||
      navigatorEvent instanceof NavigationError ||
      navigatorEvent instanceof NavigationCancel) {
      this.loading = false;
    }
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get userName() {
    const merchant = JSON.parse(localStorage.getItem('demouser'));
    return (merchant) ? merchant.store_name : '';
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
