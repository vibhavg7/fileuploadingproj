import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: UserService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string) {
    if (localStorage.getItem('demouser')) {
      // logged in so return true
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;

  }

}
