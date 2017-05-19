import { CanActivate, Router } from '@angular/router';

class Authentication implements CanActivate {

  constructor(private router: Router) {}


  canActivate() {
    this.router.navigate(['/login']);
    return false;
  }
}