import { UserService } from './shared/user/user.service';

import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent, canActivate: [UserService] },
  { path: '', component: HomeComponent, canActivate: [UserService] },
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  HomeComponent,
];