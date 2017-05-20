import { UserService } from './shared/user/user.service';
import { DdpConnectService } from './shared/ddp/connect.service';


import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent, canActivate: [UserService] },
  { path: 'login', component: LoginComponent, canActivate: [DdpConnectService] },
  { path: '', component: LoginComponent, canActivate: [DdpConnectService] },
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  HomeComponent,
];