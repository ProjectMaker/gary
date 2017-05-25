import { UserService } from './shared/user/user.service';
import { DdpConnectService } from './shared/ddp/connect.service';


import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeInfoComponent } from './pages/home/home-info.component';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/info', component: HomeInfoComponent },
  { path: 'list', component: ListComponent, canActivate: [UserService] },
  { path: 'login', component: LoginComponent, canActivate: [DdpConnectService] },
  { path: '', component: HomeComponent },
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  HomeComponent,
  HomeInfoComponent,
];