import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userAuthService: UserAuthService,
  ) { }

  ngOnInit(): void {
  }

  logInClick(): void {
    console.log('did i make it here');
    this.userAuthService.login('user', 'pass').pipe().subscribe(result => {
      if (result) {
        console.log('log in accepted');
      } else {
        console.log('log in failed');
      }
    });
  }

}
