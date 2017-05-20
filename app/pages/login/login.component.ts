import { Page } from 'ui/page';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from '../../shared/user/user';
import { UserService } from "../../shared/user/user.service";
import { DdpClientService } from "../../shared/ddp/client.service";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ['pages/login/login-common.css','pages/login/login.css']
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  error = false;

  constructor(private ddpService:DdpClientService, private userService:UserService, private router:Router, private page:Page) {
    this.user = new User();
    //this.ddpService.hello();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";

  }

  submit() {
    this.userService.login(this.user.email, this.user.password)
      .subscribe((userOutput) => {
        console.log('login results', JSON.stringify(userOutput));
        this.router.navigate(["/list"])
      }, (error) => {
        this.error = error;
        console.log('error', JSON.stringify(error));
      }, () => { console.log('complete')});
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        (error) => {
          this.error = error.json();
        }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}